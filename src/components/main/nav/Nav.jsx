import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './../logo/Logo';
import './Nav.css';

class Nav extends Component {
  constructor(props) {
		super(props);
		this.toggleNav = this.toggleNav.bind(this);
		this.updateDimensions = this.updateDimensions.bind(this);
		this.state = {
			openNav: false,
			width: window.innerWidth,
			height: window.innerHeight,
		}
	}

  updateDimensions() {
        this.setState({
        	width: window.innerWidth,
        	height: window.innerHeight,
        });
    }

  componentWillMount() { this.updateDimensions(); }

  componentDidMount() { window.addEventListener("resize", this.updateDimensions); }

  componentWillUnmount() { window.removeEventListener("resize", this.updateDimensions); }

  toggleNav() {
		this.setState({
			openNav: !this.state.openNav,
		})
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

    if (this.state.width < this.state.height) {
    			header_divs = <div id='mobileNav'>
    				<img src={Logo} alt=" " />
    				{header_divs}
    			</div>
    			header_divs = <i className="material-icons"
    				id="menu"
    				onClick={this.toggleNav}>
    					menu
    					{this.state.openNav ? header_divs : null}
    			</i>;
    		}

    return (
      <nav>
        <div className="navWrapper">
          { header_divs }
          <NavLink to={'/'}> <Logo className="logo"
                                   location={ this.props.location }
                                   width="30px" /></NavLink>
        </div>
      </nav>
    )
  }
}

export default Nav;
