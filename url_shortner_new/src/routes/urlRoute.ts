import express from "express";
import URLController from '../controllers/urlController';

const router = express.Router();


router.post("/url", URLController.handleGenerateNewShortURL);
router.get("/:shortId", URLController.handleRedirect)
router.get("/analytics/:shortId",URLController.handleGetAnalytics);

export default router;