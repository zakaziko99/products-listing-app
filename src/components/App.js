import React, { Component } from 'react';
import './App.scss';
import Product from './Product';
import Loading from './Loading';
import fetchProducts from '../services/fetchProducts';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      products: [],
      error: false
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    });

    setTimeout(() => {
      fetchProducts()
        .then(result => this.setLoadedProducts(result.data))
        .catch(error => this.setErrorLoadedProducts(error.message || error));
    }, 2000); // To give a small time to the animation loading content to display correctly
  }

  displayProducts = (products) => (
    products.map(product => (
      <Product data={product} key={product.id} />
    ))
  );

  setLoadedProducts = (products) => {
    this.setState({
      isLoading: false,
      products,
      error: null
    });
  };

  setErrorLoadedProducts = (error) => {
    this.setState({
      isLoading: false,
      Products: [],
      error
    });
  };

  displayError = () => (
    <div className="loading-error">An error occured while loading Products,
      please refresh to retry one more time</div>
  );

  render() {
    const {isLoading, products, error} = this.state;
    return (
      <div className="App">
        <h1>Coinbase Listing Products</h1>
        <div className="container-products">
          {isLoading && (<Loading />)}
          {!isLoading && !error && products && this.displayProducts(products)}
          {!isLoading && error && this.displayError()}
        </div>
      </div>
    );
  }
}

export default App;
