import React from 'react';
import css from './statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total }) => {
  return (
    <div>
      <p className={css.statistic}>Statistics</p>
      <ul className={css.counter}>
        <li>
          Good:<span>{good}</span>
        </li>
        <li>
          Neutral:<span>{neutral}</span>
        </li>
        <li>
          Bad:<span>{bad}</span>
        </li>
        <li>
          Total:
          <span>{total()}</span>
        </li>
        <li>
          Positive feedback:
          <span>{Math.round((good * 100) / total())}%</span>
        </li>
      </ul>
    </div>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,

  total: PropTypes.func.isRequired,
};
export default Statistics;
