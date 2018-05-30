import React, { Component } from 'react';
import Elsewhere from './../elsewhere/Elsewhere';
import Resume from './resume/Resume';
import ResumeItem from './resume/resume-item/ResumeItem';
import './About.css';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
                You're likely to catch me with my nose in a book, sipping matcha,
                hacking something up, doodling, exploring SF, or in pursuit of
                tempura.
              </div>
            </div>
            <div className="picture"></div>
          </div>
        </div>
        <Elsewhere links={["blah", "blah", "blah", "blah", "blah"]} />
        <Resume />
      </div>
    )
  }
}

export default About;
