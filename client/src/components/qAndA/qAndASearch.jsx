import React from 'react';
import Search from './searchButton.jsx';

const QAndASearch = (props) => {
  return (
    <div className="qAndA-search" >
      <form type="text" >
        <span>
        <input id="qAndASearch" ></input>
        <Search />
        </span>
      </form>
    </div>
  );
};

export default QAndASearch;

