import React from 'react';
import Preview from './preview/Preview';
import './Section.css';

const Section = (props) => {
  let color = props.color;
  // props.previews.map(preview =>
  //   <Preview title={preview.title} color={props.color} />
  // )
  return (
    <div className="sectionWrapper">
      <div className="sectionTitle"> { props.page } </div>
      <div className="sectionSubtitle"> { props.sub } </div>
      <Preview title={"testing"} color={color}/>
      <Preview title={"testing"} color={color}/>
      <Preview title={"testing"} color={color}/>
      <Preview title={"testing"} color={color}/>
      {/* { previews } */}
    </div>
  )
}

export default Section;
