import css from './Options.module.css';
const Options = ({ updateFeedback, resetBtn, totalFeedback }) => {
  return (
    <div className={css.btn_container}>
      <button className={css.good} onClick={() => updateFeedback('good')}>
        Good
      </button>
      <button className={css.neutral} onClick={() => updateFeedback('neutral')}>
        Neutral
      </button>
      <button className={css.bad} onClick={() => updateFeedback('bad')}>
        Bad
      </button>
      {totalFeedback > 0 && <button onClick={resetBtn}>Reset</button>}
    </div>
  );
};

export default Options;
