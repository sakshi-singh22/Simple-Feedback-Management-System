import express from 'express';
import bodyParser from 'body-parser';
import feedbackRoutes from './routes/feedbackRoutes';

const app = express();
app.use(bodyParser.json());
app.use('/api/feedback', feedbackRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
