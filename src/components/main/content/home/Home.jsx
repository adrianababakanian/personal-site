import React, { Component } from 'react';
import Terminal from './terminal/Terminal';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Terminal colors={[
          "sky",
          "green",
          "orange"
        ]} onNavigatorChange={ this.props.onNavigatorChange }/>
      </div>
    )
  }
}

export default Home;
