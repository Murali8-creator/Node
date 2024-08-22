import { nanoid } from 'nanoid';
import { URLModel } from '../models/url';
import { Request, Response } from 'express';

class URLController {
  handleRedirect = async (req: Request, res: Response) => {
    try {
      const shortId = req.params.shortId;
      const entry = await URLModel.findOneAndUpdate(
        { shortId },
        {
          $push: {
            visitHistory: {
              timestamp: Date.now(),
            },
          },
        },
        { new: true } // Returns the updated document
      );

      if (!entry) {
        return res.status(404).json({ error: 'URL not found' });
      }

      res.redirect(entry.redirectURL);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  };

  handleGenerateNewShortURL = async (req: Request, res: Response) => {
    try {
      const body = req.body;
      if (!body || !body.url) {
        return res.status(400).json({ error: 'URL is required' });
      }

      const shortID = nanoid(8);

      await URLModel.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
      });

      return res.json({ id: shortID });
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  };

  handleGetAnalytics = async (req: Request, res: Response) => {
    const shortId = req.params.shortId;
    const result = await URLModel.findOne({ shortId });

    return res.json({
      totalClicks: result?.visitHistory.length,
      analytics: result?.visitHistory,
    });
  };
}

export default new URLController();
