import React, { Component } from 'react';
import './ResumeItem.css';

class ResumeItem extends Component {
  constructor(props) {
    super(props);
    let edu = props.edu || "";
  }

  render() {
    return (
      <div className="test">
        <div className={ "section "  }> { this.props.section } </div>
        <div className="title"> { this.props.title } </div>
        <div className="content"> { this.props.content } </div>
      </div>
    )
  }
}

export default ResumeItem;
