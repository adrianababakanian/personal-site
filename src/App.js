import React, { Component } from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import logo from './logo.svg';
import Nav from './components/nav/Nav';
import Content from './components/content/Content';

class App extends Component {
  render() {
    let headers = [["About", "blue"], ["Prototyping", "orange"], ["Code", "green"], ["Design", "sky"]];
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
