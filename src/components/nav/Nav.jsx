import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.props = {home: true}
  }

  render() {
    let header_divs = [];
    for (let header of this.props.headers) {
      header_divs.push(<NavLink to={ "/" + header.toLowerCase() } className="headerDiv"> { header }</NavLink>);
    }

    return (
      <nav> <div className="navWrapper">{ header_divs }</div> </nav>
    )
  }
}

export default Nav;
