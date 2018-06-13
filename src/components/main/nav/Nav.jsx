import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './../logo/Logo';
import './Nav.css';

const Nav = (props) => {
  let header_divs = [];
  for (let header of props.headers) {
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
        <NavLink to={'/'}> <Logo location={props.location} width="30px" /></NavLink>
      </div>
    </nav>
  )
}

export default Nav;
