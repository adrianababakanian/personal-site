import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import Home from './home/Home';
import About from './about/About';
import Section from './section/Section';
import './Content.css';

class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let header_routes = [];
    let headers = this.props.headers;
    let about = headers[0];
    header_routes.push(<Route exact path="/" component={ Home } />);
    header_routes.push(<Route exact path="/about" component={ About } />);
    for (let header of headers.slice(1)) {
      header_routes.push(<Route path={ "/" + header.toLowerCase() } render={() => <Section page={ header } />}/>)
    }
    return (
      <div className="contentWrapper">{ header_routes } </div>
    )
  }
}

export default Content;
