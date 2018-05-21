import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import Home from './../home/Home';
import Design from './../design/Design';
import './Content.css';

class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let header_routes = [];
    let tester = [];
    header_routes.push(<Route exact path="/" component={ Home } />);
    for (let header of this.props.headers) {
      header_routes.push(<Route exact path={ "/" + header.toLowerCase() } component={ header } />);
    }
    return (
      <div className="contentWrapper">{ header_routes } </div>
    )
  }
}

export default Content;
