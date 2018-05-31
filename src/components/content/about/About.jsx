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
                You're likely to catch me with my nose in a book &#x1F4D6;, sipping matcha &#x1F375;,
                hacking something up &#x1F4BB;, doodling &#x1F3A8;, exploring SF &#x1F309;, or in pursuit of
                tempura &#x1F364;.
              </div>
            </div>
            <div className="picture"><img src={"./../../../assets/images/me.png"}/></div>
          </div>
        </div>
        <Elsewhere links={["#f29249", "#ebc446", "#b0e695", "#75cff0", "#475dcc"]} />
        <Resume />
      </div>
    )
  }
}

export default About;
