import React from 'react';
import './relatedItems.css';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      // <div style={styles.card}>
      <div className = 'card'>
        <h3> CATEGORY</h3>
        <h4>Expanded Product Name {this.props.itemNumber}</h4>


      </div>
    )
  }
}

const styles = {
  card: {
    width: '350px',
    height: '175px',
    backgroundColor: 'blue',
    border:'2px, solid black',
    boxSizing: 'border-box',
    fontSize: '2.5em',
    color: 'white'
  },
  // card_container: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   width: 'fit-content'
  // }
}



export default Item;
