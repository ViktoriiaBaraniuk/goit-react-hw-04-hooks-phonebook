import PropTypes from 'prop-types';
import s from './Filter.module.css';

function Filter({ value, onChange }) {
  return (
    <label className={s.filterForm}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={s.filter}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
