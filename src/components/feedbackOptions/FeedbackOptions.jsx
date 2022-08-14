import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    // <div className={css.feedback}>
    <div className={css.button}>
      <div>
        <button type="button" onClick={onLeaveFeedback}>
          {options}
        </button>
      </div>
    </div>
    // </div>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
