import React from 'react'

function AdditionCount({ totalCount }) {
  return (
    <div className="w-[300px]  m-auto  p-2 bg-white shadow-2xl">
      <p>Total Count: {totalCount}</p>
    </div>
  );
}

export default AdditionCount