import React from 'react';
import Reviews from '../reviews/reviews.jsx';
import Overview from '../productOverview/Overview.jsx';
import QAndA from '../qAndA/qAndA.jsx';
import RelatedItems from '../relatedItems/RelatedItems.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      productId: '22169',
      reviews: []
    };
  }

  componentDidMount () {
    fetch (`http://localhost:3000/reviews?count=5&productId=${this.state.productId}`)
      .then((resp) => resp.json())
      .then((reviews) => {
        console.log('reviews', reviews);
        this.setState({reviews}, () => console.log('state', this.state));
      });
  }

  render () {
    return (
      <div className='app'>
        <Overview />
        <RelatedItems />
        <QAndA />
        <Reviews reviews={this.state.reviews}/>
      </div>
    );
  }
};

export default App;