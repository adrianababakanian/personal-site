import React, { Component } from 'react';
import './Preview.css';

class Preview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="preview">
        <div className="layover"></div>
      </div>
    )
  }
}

export default Preview;
