import React from 'react';
import Nav from './nav/Nav';
import Content from './content/Content';
import './Main.css';

const Main = (props) => {
  let headers = [["About", "blue"], ["Prototyping", "orange"], ["Code", "green"], ["Design", "sky"]];
  return (
    <div className={"Main " + props.navigator}>
      <Nav headers={ headers } />
      <Content headers={ headers }
               onNavigatorChange={ props.onNavigatorChange } />
    </div>
  )
}

export default Main;
