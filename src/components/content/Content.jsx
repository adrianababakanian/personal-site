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
    let subs = ["A compilation of some of my branding & marketing schemes, illustrations, product design, and just-for-fun doodles.",
                "Explorations of data-oriented UGC, interactive user interfaces, machine learning webapps, and branded web development.",
                "Some visual manifestations of my passions for both engineering and art in the form of bluetooth-controlled robots, drawing machines, geared ponds, and more."];
    header_routes.push(<Route exact path="/" component={ Home } />);
    header_routes.push(<Route exact path="/about" component={ About } />);
    for (let sub in subs) {
      header_routes.push(<Route path={ "/" + (headers.slice(1)[sub]).toLowerCase() }
                                render={() => <Section page={ headers.slice(1)[sub] }
                                                       sub={ subs[sub]} />}/>);
    }
    return (
      <div className="contentWrapper">{ header_routes } </div>
    )
  }
}

export default Content;
