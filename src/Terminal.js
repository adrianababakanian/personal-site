import React, { Component } from 'react';
import logo from './logo.svg';
import './Terminal.css';

// const Terminal = () => (
//   <div className="Terminal">
//     <p> testing some content </p>
//   </div>
// );

class Terminal extends React.Component {
  render() {
    return (
      <div className="Terminal">
        <p> with render method </p>
      </div>
    );
  }
}

export default Terminal;
