import React from 'react';

const RemoveAllFilters = ({ removeFilters }) => {
  let handleRemoveFilters = () => {
    removeFilters()
  }

  return (
    <div>
      <button type='button' onClick={handleRemoveFilters}> Remove All filters </button>
    </div>
  )
}

export default RemoveAllFilters;