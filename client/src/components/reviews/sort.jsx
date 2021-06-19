import React from 'react';

class Sort extends React.Component {
  constructor (props) {
    super(props);
  }

  handleSortChange = (e) => {
    this.props.sortReviews(e.target.value)
  }

  render () {
    return (
      <div className='reviews-sort'>
        <label htmlFor='sortSelect'>
          {this.props.noOfFilteredSearchedTotalReviews ? this.props.noOfFilteredSearchedTotalReviews : (this.props.noOfSearchedTotalReviews ? this.props.noOfSearchedTotalReviews: (this.props.noOfFilteredTotalReviews ? this.props.noOfFilteredTotalReviews : this.props.noOfReviews))} reviews, sorted by
        </label>
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