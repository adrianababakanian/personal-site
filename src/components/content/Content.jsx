import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home/Home';
import About from './about/About';
import Section from './section/Section';
import './Content.css';

const Content = (props) => {
  let header_routes = [];
  let headers = props.headers;
  let subs = ["Some visual manifestations of my passions for both engineering \
               and art in the form of bluetooth-controlled robots, drawing \
               machines, geared ponds, and more.",
              "Explorations of data-oriented UGC, interactive user interfaces, \
               machine learning webapps, and branded web development.",
              "A compilation of some of my branding & marketing schemes, \
               illustrations, product design, and just-for-fun doodles."];

  header_routes.push(<Route exact path="/" component={ Home } key="home" />);
  header_routes.push(<Route exact path="/about" component={ About } key="about" />);
  let sliced = headers.slice(1);
  for (let sub in subs) {
    let curr = sliced[sub];
    header_routes.push(<Route path={ "/" + (curr[0]).toLowerCase() }
                              key={(curr[0]).toLowerCase()}
                              render={() => <Section page={ curr[0] }
                                                     sub={ subs[sub] }
                                                     color={ curr[1] } />} />);
  }
  return (
    <div className="contentWrapper">{ header_routes } </div>
  )
}

export default Content;
