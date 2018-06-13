import React, { Component } from 'react';
import Terminal from './terminal/Terminal';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="pageWrap homePage">
        <Terminal colors={[
          "sky",
          "green",
          "orange"
        ]}/>
      </div>
    )
  }
}

export default Home;
