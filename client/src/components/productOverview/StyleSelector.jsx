import React from 'react';
import StyleRow from './StyleRow.jsx';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    // split styles array into chunks for 4
    const styleRows = [];
    const rowSize = 4;
    for (let i = 0; i < this.props.styles.length; i += rowSize) {
      styleRows.push(this.props.styles.slice(i, i + rowSize));
    }

    return (
      <div className='style-selector'>
        <div>Styles:</div>
        {styleRows.map(row => <StyleRow styles={row} key={row[0].name}/>)}
      </div>
    );
  }
}

export default StyleSelector;