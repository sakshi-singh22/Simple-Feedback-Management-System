import express from 'express';
import bodyParser from 'body-parser';
import feedbackRoutes from './routes/feedbackRoutes';

const app = express();
app.use(bodyParser.json());
app.use('/api/feedback', feedbackRoutes);

export default app;
