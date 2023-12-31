import React from 'react';
import PropTypes from 'prop-types';

export default function Input(props) {
  const { children, label } = props;

  return (
    <div className="flex flex-col inline-block text-md font-semibold text-gray-700 my-5">
      {label}
      {children}
    </div>
  );
}

Input.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};
