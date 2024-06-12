import { Router } from 'express';
import { getFeedbacks, submitFeedback } from '../controllers/feedbackController';

const router = Router();

router.get('/', getFeedbacks);
router.post('/', submitFeedback);

export default router;
