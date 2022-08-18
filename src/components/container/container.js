import PropTypes from 'prop-types';
import css from './container.module.css';

function Container({ children }) {
  return <div className={css.feedback}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
