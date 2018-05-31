import React, { Component } from 'react';
import './Terminal.css';

class Terminal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let colors = this.props.colors;
    let circle_divs = [];
    for (let color of colors) {
      circle_divs.push(<div className={"circle " + color }></div>);
    }
    return (
      <div className="Terminal">
        <div className="terminalHeader">
          <div className="circleWrap"> { circle_divs } </div>
        </div>
        <div className="terminalText">
          <div className="terminalTitle">Hello world!</div>
          <div className="terminalMain">
            I'm Adriana &mdash; a
            <em className="hov"> software engineer</em>,
            <em className="hov"> product designer</em>, &
            <em className="hov"> web developer </em> studying
            Math & Computer Science at the
            University of California, Berkeley.
          </div>
          <div className="terminalSub">
            Feel free to explore my site for a synthesis of my
            projects and experiences. You'll likely notice my
            love of art history, literature, and sushi along
            the way!
          </div>
          <div className="terminalLink">
            Feeling hacky? &rarr;
            <div className="bottom"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Terminal;
