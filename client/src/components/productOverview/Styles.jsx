import React from 'react';

class Styles extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='style-selector'>
        <div className='style'>Style #1</div>
        <div className='style'>Style #2</div>
      </div>
    );
  }
}

export default Styles;