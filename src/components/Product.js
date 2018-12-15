import React, { Component } from 'react';
import './Product.scss';
import Loading from './Loading';
import ProductStats from './ProductStats';
import fetchProductStats from '../services/fetchProductStats';

class Product extends Component {
  constructor() {
    super();

    // loadedStats is to check if the stats are loaded, to prevent call the api one more time
    this.state = {
      loadedStats: false,
      hidingStats: true,
      isLoading: false,
      stats: null,
      error: null
    };
  }

  loadStats = (event) => {
    const {isLoading, loadedStats, hidingStats} = this.state;

    // if in a loading process, cancel the action
    if (isLoading) return;
    event.preventDefault();

    if (hidingStats) {
      this.setState({
        hidingStats: false
      });
      if (!loadedStats) {
        // stats not loaded, must fetch and display them
        this.setState({
          isLoading: true
        });

        fetchProductStats(this.props.data.id)
          .then(result => this.setLoadedStats(result.data))
          .catch(error => this.setErrorLoadedStats(error.message || error));
      }
    }
  };

  setLoadedStats = (stats) => {
    this.setState({
      loadedStats: true,
      isLoading: false,
      stats,
      error: null
    });
  };

  setErrorLoadedStats = (error) => {
    this.setState({
      loadedStats: false,
      isLoading: false,
      stats: null,
      error
    });
  };

  closeStats = (event) => {
    event.preventDefault();
    // stats already loaded and displayed, just have to hide them
    this.setState({
      hidingStats: true
    });
  };

  render() {
    const {base_min_size, base_max_size, display_name} = this.props.data;
    const {status, min_market_funds, max_market_funds} = this.props.data;
    const {isLoading, loadedStats, hidingStats, stats, error} = this.state;
    const containerStatsClass = 'container-stats' + (hidingStats ? '' : ' open');
    return (
      <div className="Product">
        <h2 className="ProductName">{display_name}</h2>
        <div className="ProductNumbers header">
          <span className="ProductLabel flex-4">Base Size</span>
          <span className="ProductLabel flex-2"></span>
          <span className="ProductLabel flex-4">Market Funds</span>
        </div>
        <div className="ProductNumbers">
          <div className="ProductMinMax flex-4">
            <span className="ProductMin colored">{base_min_size ? base_min_size : '---'}</span>
            <span className="ProductMax colored">{base_max_size ? base_max_size : '---'}</span>
          </div>
          <div className="ProductMinMax flex-2">
            <span className="ProductMin">Min</span>
            <span className="ProductMax">Max</span>
          </div>
          <div className="ProductMinMax flex-4">
            <span className="ProductMin colored">{min_market_funds ? min_market_funds : '---'}</span>
            <span className="ProductMax colored">{max_market_funds ? max_market_funds : '---'}</span>
          </div>
        </div>
        <button onClick={this.loadStats}>Show Stats</button>
        <div className="ProductStatus">
          Status: <span className={
            status === 'online' ? 'textStatus ProductStatusGreen' : 'textStatus ProductStatusGreen'
          }>{status}</span>
        </div>
        <div className={containerStatsClass}>
          <span className="closeStats" onClick={this.closeStats}>&times;</span>
          {isLoading && <Loading />}
          {!isLoading && !error && loadedStats && <ProductStats data={stats} />}
          {!isLoading && error && (
            <div className="loading-error">An error occured while loading
              stats for this product</div>
          )}
        </div>
      </div>
    );
  }
}

export default Product;
