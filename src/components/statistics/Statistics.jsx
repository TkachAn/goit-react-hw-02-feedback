import PropTypes from 'prop-types';
import css from './Statistics.module.css';
export default function Statistics({ good, neutral, bad, total, percent }) {
  return (
    <>
      <h2 className={css.h22}>Statistic</h2>
      <div className={css.statistic}>
        <p className={css.p}>
          good: <span className={css.number}>{good}</span>
        </p>
        <p className={css.p}>
          neutral: <span className={css.number}>{neutral}</span>
        </p>
        <p className={css.p}>
          bad: <span className={css.number}>{bad}</span>
        </p>
        <p className={css.p}>
          total: <span className={css.number}>{total}</span>
        </p>
      </div>
      <div className={css.percent}>
        <p>
          positive feedback:<br></br>
          <span className={css.numb}>{percent}%</span>
        </p>
      </div>
    </>
  );
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
};
