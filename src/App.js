import React, { Component } from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import Navigator from './components/navigator/Navigator';
import Main from './components/main/Main';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {navigator: false}
    this.handleNavigatorChange = this.handleNavigatorChange.bind(this);
  }
  handleNavigatorChange() {
    this.setState({navigator: !this.state.navigator})
  }
  render() {
    return (
      <Router>
        <div>
          <Navigator navigator={this.state.navigator} onNavigatorChange={this.handleNavigatorChange}/>
          <Main navigator={this.state.navigator} onNavigatorChange={this.handleNavigatorChange}/>
        </div>
      </Router>
    );
  }
}

export default App;
