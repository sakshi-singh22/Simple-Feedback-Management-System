import { Request, Response } from 'express';
import { getAllFeedbacks, addFeedback } from '../services/feedbackService';

const getFeedbacks = (req: Request, res: Response) => {
  const feedbacks = getAllFeedbacks();
  res.json(feedbacks);
};

const submitFeedback = (req: Request, res: Response) => {
  const { name, feedback } = req.body;
  const newFeedback = addFeedback(name, feedback);
  res.status(201).json(newFeedback);
};

export { getFeedbacks, submitFeedback };
