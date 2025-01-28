import css from './Feedback.module.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  const data = {
    labels: ['Good', 'Neutral', 'Bad'],
    datasets: [
      {
        data: [feedback.good, feedback.neutral, feedback.bad],
        backgroundColor: ['#5b8e7d', '#f4a259', '#bc4b51'],
        borderColor: ['#036a48', '#d37522', '#710107'],
        borderWidth: 2,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: false,
      },
    },
  };
  return (
    <div className={css.feedback_container}>
      <div className={css.text_wrapper}>
        <p>{`Good: ${feedback.good}`}</p>
        <p>{`Neutral: ${feedback.neutral}`}</p>
        <p>{`Bad: ${feedback.bad}`}</p>
        <p>{`Total: ${totalFeedback}`}</p>
        <p>{`Positive: ${positiveFeedback}%`}</p>
      </div>
      <div className={css.chart}>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default Feedback;
