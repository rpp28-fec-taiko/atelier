import React from 'react';
import SearchButton from './searchButton.jsx';

const QAndASearch = (props) => {
  return (
    <div className="qAndA-search" >
      <form type="text" >
        <input id="qAndASearch" ></input>
        <SearchButton />
      </form>
    </div>
  );
};

export default QAndASearch;

