import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Terminal from './Terminal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello there!</h1>
        </header>

        <Terminal/>
      </div>
    );
  }
}

export default App;
