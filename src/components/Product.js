import React, { Component } from 'react';
import './Product.scss';

class Product extends Component {
  render() {
    const {base_min_size, base_max_size, display_name} = this.props.data;
    const {status, min_market_funds, max_market_funds} = this.props.data;
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
        <div className="ProductStatus">
          Status: <span className={
            status === 'online' ? 'textStatus ProductStatusGreen' : 'textStatus ProductStatusGreen'
          }>{status}</span>
        </div>
      </div>
    );
  }
}

export default Product;
