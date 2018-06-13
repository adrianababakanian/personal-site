import React, { Component } from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import Navigator from './components/navigator/Navigator';
import Main from './components/main/Main';
import './index.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigator />
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;
