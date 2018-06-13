import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom';
import Logo from './../logo/Logo';
import './Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.props = {home: true}
  }

  render() {
    let header_divs = [];
    for (let header of this.props.headers) {
      header_divs.push(<NavLink to={ '/' + header[0].toLowerCase() }
                                className={"headerDiv " + header[1]}
                                activeClassName="activeHeaderDiv"
                                key={header[1]}>
                                { header[0] }
                                </NavLink>);}
    return (
      <nav>
        <div className="navWrapper">
          { header_divs }
          <NavLink to={'/'}> <Logo location={this.props.location} width="30px" /> </NavLink>
        </div>
      </nav>
    )
  }
}

export default Nav;
