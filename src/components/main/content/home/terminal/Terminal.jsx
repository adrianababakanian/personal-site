import React from 'react';
import './Terminal.css';

const Terminal = (props) => {
  let colors = props.colors;
  let circle_divs = [];
  colors.map(color =>
    circle_divs.push(<div className={"circle " + color } key={color}></div>)
  );
  return (
    <div className="Terminal">
      <div className="terminalHeader">
        <div className="circleWrap"> { circle_divs } </div>
      </div>
      <div className="terminalText">
        <div className="terminalTitle">Hello world!</div>
        <div className="terminalMain">
          I'm Adriana &mdash; a
          <em className="hov blue"> software engineer</em>,
          <em className="hov green"> product designer</em>, &
          <em className="hov orange"> web developer </em> studying
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
          <span role="img" aria-label="matcha">&#x1F375;</span>
        </div>
      </div>
    </div>
  )
}

export default Terminal;
