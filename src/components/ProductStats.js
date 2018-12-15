import React, { Component } from 'react';
import './ProductStats.scss';

class ProductStats extends Component {
  render() {
    const {open, low, high, volume, last, volume_30day} = this.props.data;
    return (
      <div className="ProductStats">
        <h3>Stats</h3>
        <span className="ProductStatsLabel">Open</span>
        <span className="ProductStatsValue open">{open}</span>
        <span className="ProductStatsLabel">Low</span>
        <span className="ProductStatsValue low">{low}</span>
        <span className="ProductStatsLabel">High</span>
        <span className="ProductStatsValue high">{high}</span>
        <span className="ProductStatsLabel">Volume</span>
        <span className="ProductStatsValue volume">{volume}</span>
        <span className="ProductStatsLabel">Last</span>
        <span className="ProductStatsValue last">{last}</span>
        <span className="ProductStatsLabel">Volume (30 days)</span>
        <span className="ProductStatsValue volume30d">{volume_30day}</span>
      </div>
    );
  }
}

export default ProductStats;
