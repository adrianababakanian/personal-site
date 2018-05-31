import React, { Component } from 'react';
import Else from './else/Else';
import './Elsewhere.css';

const Elsewhere = (props) => {
  let links = [];
  for (let link of props.links) {
    links.push(<Else color={link} />);
  }
  return (
    <div className="elsewhere">
      {links}
    </div>
  );
}

export default Elsewhere;
