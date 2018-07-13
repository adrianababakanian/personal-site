import React from 'react';
import { Link, Route } from 'react-router-dom';
import Project from './../project/Project';
import './Preview.css';

const Preview = (props) => {
  return (
    <div>
      <Link className="preview" to="/design/project">
        <div className={"layover " + props.color}> { props.title } </div>
      </Link>
    </div>
  )
}

export default Preview;
