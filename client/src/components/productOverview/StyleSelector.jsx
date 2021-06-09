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
        <span className='styles-text'>Style > </span><span className='current-style-name'>{this.props.currentStyle.name}</span>
        {styleRows.map(row => <StyleRow currentStyle={this.props.currentStyle} updateStyle={this.props.updateStyle} styles={row} key={row[0].name}/>)}
      </div>
    );
  }
}

export default StyleSelector;