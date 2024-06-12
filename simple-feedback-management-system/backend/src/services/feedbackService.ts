interface Feedback {
    id: number;
    name: string;
    feedback: string;
  }
  
  let feedbacks: Feedback[] = [];
  let currentId = 1;
  
  const getAllFeedbacks = (): Feedback[] => {
    return feedbacks;
  };
  
  const addFeedback = (name: string, feedback: string): Feedback => {
    const newFeedback = { id: currentId++, name, feedback };
    feedbacks.push(newFeedback);
    return newFeedback;
  };
  
  export { getAllFeedbacks, addFeedback };
  