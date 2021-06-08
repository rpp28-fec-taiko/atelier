import React from 'react';

const QAndASearch = (props) => {
  return (
    <div className="qAndA-search" >
      <form type="text" >
        <input id="input" onChange={props.test(document.getElementById("input"))}></input>
      </form>
      <br></br>
    </div>
  );
};

export default QAndASearch;