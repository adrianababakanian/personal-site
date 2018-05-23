import React, { Component } from 'react';
import Preview from './preview/Preview';
import './Section.css';

class Section extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let page = this.props.page;
    return (
      <div className="sectionWrapper">
        <div className="sectionTitle">{ page }</div>
        <div className="sectionSubtitle">
          A compilation of some of my branding & marketing schemes, illustrations,
          product design, and just-for-fun doodles.
        </div>
        <Preview title="testing"/>
        <Preview title="testing"/>
        <Preview title="testing"/>
        <Preview title="testing"/>


      </div>
    )
  }
}

export default Section;
