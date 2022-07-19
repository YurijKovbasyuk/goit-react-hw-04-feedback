import css from './feedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onBtnClick }) => {
  return (
    <div className={css.button}>
      {options.map(option => (
        <button
          title={option}
          key={option}
          type="button"
          onClick={() => {
            onBtnClick(option);
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default FeedbackOptions;
