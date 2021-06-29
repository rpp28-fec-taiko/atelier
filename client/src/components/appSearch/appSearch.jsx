import React from 'react';
import AppSearchResult from './appSearchResult.jsx';

const BACKEND_URL = process.env.NODE_ENV === 'development' ? `http://localhost:3000` : `http://34.225.154.204`;

class AppSearch extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      term: '',
      products: [],
      results: []
    }
  }

  handleChange = (e) => {
    // console.log('search', e.target.value);
    let results = this.state.products.filter((pdt) => pdt.name.toLowerCase().includes(e.target.value.toLowerCase())).slice(0, 10);
    this.setState((prevState) => ({
      term: e.target.value,
      results
    }), () => console.log('state after searching for pdts', this.state))
  }

  getAllPdts = () => {
    return fetch(`${BACKEND_URL}/products`)
      .then((resp) => resp.json())
      .then((products) => {
        this.setState((prevState) => ({
          products
        }), () => console.log('state after getting all pdts', this.state))
      })
  }

  componentDidMount () {
    this.getAllPdts()
  }

  render () {
    return (
      <div className='app-search'>
        <div className='input-bar'>
          <label htmlFor='app-search'> SEARCH </label>
          <input name='app-search' id='app-search' type='search' onChange={this.handleChange}/>
        </div>

        <div className='results'>
          {
            this.state.results.map((pdt, idx) => <AppSearchResult key={idx} name={pdt.name} id={pdt.id} handlePdtChange={this.props.handlePdtChange} />)
          }
        </div>
      </div>
    )
  }

}

export default AppSearch;