import { useState, useEffect } from 'react';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import feedbackData from './assets/feedback.json';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';

const App = () => {
  const [feedback, setFeedback] = useState(
    JSON.parse(localStorage.getItem('feedback')) ?? feedbackData
  );

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const totalFeedback = Object.values(feedback).reduce(
    (prevValue, curValue) => prevValue + curValue
  );

  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  const resetBtn = () => {
    setFeedback(feedbackData);
  };

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetBtn={resetBtn}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </>
  );
};

export default App;
