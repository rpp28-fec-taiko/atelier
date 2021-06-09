import React from 'react';

class Sort extends React.Component {
  constructor (props) {
    super(props);
  }

  handleSortChange = (e) => {
    console.log('e', e.target.value);
    this.props.sortReviews(e.target.value)
  }

  render () {
    return (
      <div className='reviews-sort'>
        <label htmlFor='sortSelect'>No of reviews sorted by</label>
        <select id='sortSelect' value={this.props.reviewCriteria} onChange={this.handleSortChange}>
          <option value='relevant'> Relevant </option>
          <option value='helpful'> Helpful </option>
          <option value='newest'> Newest </option>
        </select>
      </div>
    );
  }

};

export default Sort;