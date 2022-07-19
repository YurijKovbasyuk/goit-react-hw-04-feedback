import { useState } from 'react';
import css from 'components/section/section.module.css';
import FeedbackOptions from 'components/FeedbackOptions/feedbackOptions';
import Statistics from 'components/statistics/statistics';
import Notification from 'components/notification/notification';

function Section() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleBtnClick = e => {
    const type = e;

    switch (type) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  const totalCount = () => {
    return good + neutral + bad;
  };

  const options = ['good', 'neutral', 'bad'];

  return (
    <div>
      <p className={css}>Please leave feedback</p>
      <FeedbackOptions onBtnClick={handleBtnClick} options={options} />
      {totalCount() === 0 ? (
        <Notification message={'There is no feedback'} />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalCount}
        />
      )}
    </div>
  );
}

export default Section;
