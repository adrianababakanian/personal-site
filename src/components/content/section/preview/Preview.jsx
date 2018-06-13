import React from 'react';
import './Preview.css';

const Preview = (props) => {
  return (
    <div className="preview">
      <div className={"layover " + props.color}> { props.title } </div>
    </div>
  )
}

export default Preview;
