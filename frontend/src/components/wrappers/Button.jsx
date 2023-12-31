import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { linkTo, onClick, className, children, color } = props;

  const classes =
    className ??
    `${color} hover:bg-accent-blue text-black font-bold py-2 px-4 rounded`;

  return (
    <Link to={linkTo}>
      <button type="button" className={classes} onClick={onClick}>
        {children}
      </button>
    </Link>
  );
}

Button.propTypes = {
  linkTo: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Button.defaultProps = {
  color: 'bg-primary',
};
