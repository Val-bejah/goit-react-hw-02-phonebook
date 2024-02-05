import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ filter, setFilter }) => {
  const handleChange = e => {
    setFilter(e.target.value);
  };

  return (
    <label>
      Filter contacts:
      <input type="text" value={filter} onChange={handleChange} />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default Filter;
