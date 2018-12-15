import React, { Component } from 'react';
import './Product.scss';

class Product extends Component {
  render() {
    const {status} = this.props.data;
    const displayName = this.props.data.display_name;
    return (
      <div className="Product">
        <span>{displayName} - {status}</span>
      </div>
    );
  }
}

export default Product;
