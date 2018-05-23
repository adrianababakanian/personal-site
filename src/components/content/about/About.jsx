import React, { Component } from 'react';
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
              <div className="subText"></div>
            </div>
            <div className="picture"></div>
          </div>
          <div className="elsewhere"></div>
        </div>
      </div>
    )
  }
}

export default About;
