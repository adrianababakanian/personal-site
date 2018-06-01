import React, { Component } from 'react';
import Terminal from './terminal/Terminal';
import Footer from './../../footer/Footer';
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
        <Footer />
      </div>
    )
  }
}

export default Home;
