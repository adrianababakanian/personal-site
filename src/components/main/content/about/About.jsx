import React from 'react';
import Elsewhere from './../elsewhere/Elsewhere';
import Resume from './resume/Resume';
import './About.css';
import me from './../../../../assets/images/adriana.jpg';

const About = () => {
  return (
    <div className="aboutWrapper">
      <div className="summary">
        <div className="content">
          <div className="text">
            <div className="mainText">
              Nice to meet you! <br></br>
              I'm <b className="hov"> Adriana Babakanian</b>, a <br></br>
              fourth-year Regents' scholar at <br></br>
              the <em className="hov"> Univeristy of California,<br></br>
               Berkeley </em> pursuing a double <br></br>
               major in <em className="hov"> Applied Mathematics </em> <br></br>
               and <em className="hov"> Computer Science </em>.
            </div>
            <div className="subText">
              I have a keen passion for creating, especially when it comes to
              human-centered products that lie at the intersection of design
              & technology.
            </div>
            <div className="subText">
              You're likely to catch me with my nose in a book
              <span role="img" aria-label="book" alt=" "> &#x1F4D6;</span>,
              sipping matcha
              <span role="img" aria-label="matcha" alt=" "> &#x1F375;</span>,
              hacking something up
              <span role="img" aria-label="laptop" alt=" "> &#x1F4BB;</span>,
              doodling
              <span role="img" aria-label="art" alt=" "> &#x1F3A8;</span>,
              exploring SF
              <span role="img" aria-label="SF" alt=" "> &#x1F309;</span>,
              or in pursuit of tempura
              <span role="img" aria-label="tempura" alt=" "> &#x1F364;</span>.
            </div>
          </div>
          <div className="picture"><img src={me} className="me" alt="me" /></div>
        </div>
        <Elsewhere />
      </div>
      <Resume />
    </div>
  )
}

export default About;
