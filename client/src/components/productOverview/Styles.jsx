import React from 'react';

class Styles extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='style-selector'>
        <div className='style-thumbnail'>Style #1</div>
        <div className='style-thumbnail'>Style #2</div>
        <div className='style-thumbnail'>Style #3</div>
        <div className='style-thumbnail'>Style #4</div>
      </div>
    );
  }
}

export default Styles;