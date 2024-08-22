import express from 'express';
import mongoose from 'mongoose';
import router from './routes/urlRoute.js';

const app = express();
app.use(express.json());
app.use('/', router);

const port = process.env.PORT || '4000';

console.log(port);

const MONGODB_URI = process.env.MONGODB_URL|| 'mongodb://localhost:27017';
console.log(MONGODB_URI);

mongoose
  .connect(MONGODB_URI, {
    dbName: 'URL',
  })
  .then(() => {
    console.log('Database connected');
    app.listen(port, () => {
      console.log(`server running on ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(1); //exits if the database connection fails
  });