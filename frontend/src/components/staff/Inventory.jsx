import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import FullTable from './FullTable';

export default function Inventory({ refresh, onRefresh }) {
  useEffect(() => {
    onRefresh();
  }, [refresh, onRefresh]);

  return (
    <div className="flex flex-col w-[50%] p-5 border border-black rounded-md bg-gray-100">
      <FullTable refresh={refresh} onRefresh={onRefresh} />
    </div>
  );
}

Inventory.propTypes = {
  refresh: PropTypes.bool.isRequired,
  onRefresh: PropTypes.func.isRequired,
};
