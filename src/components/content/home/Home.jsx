import React, { Component } from 'react';
import Terminal from './terminal/Terminal';
import Footer from './../../footer/Footer';
import Navigator from './../../navigator/Navigator';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="pageWrap homePage">
        <Terminal colors={[
          "blue",
          "green",
          "orange"
        ]}/>
      </div>
    )
  }
}

export default Home;
