import React from 'react';
import './ResumeItem.css';

const ResumeItem = (props) => {
  return (
    <div className="test">
      <div className={ "section "  }> { props.section } </div>
      <div className="title"> { props.title } </div>
      <div className="content"> { props.content } </div>
    </div>
  )
}

export default ResumeItem;
