import React, { Component } from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Terminal from './components/terminal/Terminal';
import Nav from './components/nav/Nav';
import Content from './components/content/Content';

class App extends Component {
  render() {
    let headers = ["About", "Prototyping", "Code", "Design"];
    return (
      <Router>
        <div>
          <Nav headers={ headers } />
          <Content headers={ headers } />
        </div>
      </Router>
    );
  }
}

export default App;
