import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
export default function FeedbackOptions({ options, onLeaveFeedback, name }) {
  return (
    <div className={css.button}>
      <button name={name} type="button" onClick={onLeaveFeedback}>
        {options}
      </button>
    </div>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
