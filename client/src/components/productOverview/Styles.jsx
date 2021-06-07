import React from 'react';

class Styles extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='style-selector'>
        <div>Styles:</div>
        <div>
          <span className='style-thumbnail'>Style #1</span>
          <span className='style-thumbnail'>Style #2</span>
          <span className='style-thumbnail'>Style #3</span>
          <span className='style-thumbnail'>Style #4</span>
        </div>
        <div>
          <span className='style-thumbnail'>Style #5</span>
          <span className='style-thumbnail'>Style #6</span>
          <span className='style-thumbnail'>Style #7</span>
          <span className='style-thumbnail'>Style #8</span>
        </div>
      </div>
    );
  }
}

export default Styles;