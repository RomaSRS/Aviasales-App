import React from 'react';
import PropTypes from 'prop-types';

const SortingButton = React.memo((props) => {
  const {
    label,
    name,
    className,
    handleClick,
  } = props;
  return (
    <button
      type="button"
      className={className}
      onClick={handleClick(name)}
    >
      {label}
    </button>
  );
});

SortingButton.propTypes = ({
  label: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  handleClick: PropTypes.func,
});

export default SortingButton;
