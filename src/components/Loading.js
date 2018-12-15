import React, { Component } from 'react';
import './Loading.scss';

class Loading extends Component {
  render() {
    return (
      <div className="Loading">
        <div className="LoadingCercle">
          <div className="LoadingSpinner"></div>
        </div>
      </div>
    );
  }
}

export default Loading;
