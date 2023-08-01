import SectionTitle from './SectionTitle/SectionTitle';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import NotificationMessage from './NotificationMessage/NotificationMessage';
import PropTypes from 'prop-types';
import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.round((good * 100) / countTotalFeedback());
  };

  const handleButtonClick = key => {
    switch (key) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        break;
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <SectionTitle>
        <FeedbackOptions handleButtonClick={handleButtonClick} />

        {countTotalFeedback() === 0 ? (
          <NotificationMessage />
        ) : (
          <Statistics
            // state={this.state}
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={countTotalFeedback}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        )}
      </SectionTitle>
    </div>
  );
};

App.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default App;
