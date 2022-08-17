import PropTypes from 'prop-types';
import s from './Container.module.css';

function SectionTitle({ children }) {
  return <div className={s.SectionTitle}>{children}</div>;
}

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionTitle;
