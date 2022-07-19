import React, { Component } from 'react';
import css from 'components/section/section.module.css';
import FeedbackOptions from 'components/FeedbackOptions/feedbackOptions';
import Statistics from 'components/statistics/statistics';
import Notification from 'components/notification/notification';

class Section extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = type => {
    this.setState(prevState => {
      return { [type]: prevState[type] + 1 };
    });
  };

  totalCount = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  options = Object.keys(this.state);

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <p className={css}>Please leave feedback</p>
        <FeedbackOptions
          onBtnClick={this.handleBtnClick}
          options={this.options}
        />
        {this.totalCount() === 0 ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.totalCount}
          />
        )}
      </div>
    );
  }
}

export default Section;
