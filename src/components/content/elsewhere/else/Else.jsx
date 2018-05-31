import React, { Component } from 'react';
import './Else.css';

const Else = (props) => {
  const colorStyle = {
    background: props.color,
  }
  return (
    <div className="else" style={colorStyle}></div>
  );
}


export default Else;
