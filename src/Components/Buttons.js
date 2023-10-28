import React from 'react'

const Buttons = ({ names }) => {
  return (
    <div>
      <button className="px-5 py-2 m-2 bg-gray-200 rounded-lg">{names}</button>
    </div>
  );
}

export default Buttons