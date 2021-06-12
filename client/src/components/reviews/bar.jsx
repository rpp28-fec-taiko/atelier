import React from 'react';

class Bar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  handleFilterClick = () => {
    this.props.filterReviews(this.props.star, !this.state.selected);
    this.setState((prevState) => ({
      selected: !prevState.selected
    }), () => console.log('filter selected after click', this.state.selected, this.props.star))
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.props.removedAllFilters !== prevProps.removedAllFilters) {
      if (this.props.removedAllFilters) {
        this.setState({
          selected: false
        }, () => console.log('Bar after removing all filters', this.state.selected, this.props.star))
      }
    }
  }

  render () {
    return (
      <div className='bar' onClick={this.handleFilterClick}>
        <div style={{'textDecoration': 'underline'}}> {this.props.star} stars </div>
        <div className='bar-container'>
          <div className='bar-child' style={{width: `${this.props.fill}%`}}>
          </div>
        </div>
        <div className='bar-number'> {this.props.noOfStarReviews} </div>
      </div>
    );
  }
}

export default Bar;