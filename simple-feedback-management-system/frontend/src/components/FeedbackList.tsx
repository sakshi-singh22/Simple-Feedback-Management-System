import React, { useEffect, useState } from 'react';
import { getFeedbacks } from '../services/feedbackService';

interface Feedback {
  id: number;
  name: string;
  feedback: string;
}

const FeedbackList: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const feedbacks = await getFeedbacks();
      setFeedbacks(feedbacks);
    };

    fetchFeedbacks();
  }, []);

  return (
    <div>
      <h2>Feedback List</h2>
      <ul>
        {feedbacks.map((feedback) => (
          <li key={feedback.id}>
            <strong>{feedback.name}</strong>: {feedback.feedback}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList;
