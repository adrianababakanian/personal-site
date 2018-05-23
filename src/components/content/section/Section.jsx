import React, { Component } from 'react';
import Preview from './preview/Preview';
import './Section.css';

class Section extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sectionWrapper">
        <div className="sectionTitle">{ this.props.page }</div>
        <div className="sectionSubtitle"> { this.props.sub } </div>
        <Preview title="testing"/>
        <Preview title="testing"/>
        <Preview title="testing"/>
        <Preview title="testing"/>


      </div>
    )
  }
}

export default Section;
