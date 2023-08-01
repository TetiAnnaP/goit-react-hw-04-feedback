import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <div>
      <p>Statistics:</p>
      <ul>
        <li className={css.item}>Good: {good}</li>
        <li className={css.item}>Neutral: {neutral}</li>
        <li className={css.item}>Bad: {bad}</li>
        <li className={css.item}>Total: {countTotalFeedback()}</li>
        <li className={css.item}>
          {' '}
          Positive feedback: {countPositiveFeedbackPercentage()} %
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  countTotalFeedback: PropTypes.func,
  countPositiveFeedbackPercentage: PropTypes.func,
};

export default Statistics;
