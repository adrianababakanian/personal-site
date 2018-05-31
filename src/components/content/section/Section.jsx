import React, { Component } from 'react';
import Preview from './preview/Preview';
import './Section.css';

class Section extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let color = this.props.color;
    return (
      <div className="sectionWrapper">
        <div className="sectionTitle">{ this.props.page }</div>
        <div className="sectionSubtitle"> { this.props.sub } </div>
        <Preview title={"testing"} color={color}/>
        <Preview title={"testing"} color={color}/>
        <Preview title={"testing"} color={color}/>
        <Preview title={"testing"} color={color}/>


      </div>
    )
  }
}

export default Section;
