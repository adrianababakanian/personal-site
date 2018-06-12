import React, { Component } from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import logo from './logo.svg';
import Navigator from './components/navigator/Navigator';
import Nav from './components/nav/Nav';
import Content from './components/content/Content';
import './index.css';

class App extends Component {
  render() {
    let headers = [["About", "blue"], ["Prototyping", "orange"], ["Code", "green"], ["Design", "sky"]];
    return (
      <Router>
        <div>
          <Navigator />
          <div className="main">
            <Nav headers={ headers } />
            <Content headers={ headers } />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
