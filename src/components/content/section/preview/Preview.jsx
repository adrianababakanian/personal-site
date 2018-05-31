import React, { Component } from 'react';
import './Preview.css';

class Preview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="preview">
        <div className={"layover " + this.props.color}> { this.props.title } </div>
      </div>
    )
  }
}

export default Preview;
