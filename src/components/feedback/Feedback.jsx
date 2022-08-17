import PropTypes from 'prop-types';
import css from './Feedback.module.css';
export default function Feedback({ onLeaveFeedback, name }) {
  return (
    <div className={css.button}>
      <button name={name} type="button" onClick={onLeaveFeedback}>
        {name}
      </button>
    </div>
  );
}
Feedback.propTypes = {
  name: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
