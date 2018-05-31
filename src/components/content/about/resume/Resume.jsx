import React, { Component } from 'react';
import ResumeItem from './resume-item/ResumeItem';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume">
      <div className="line"></div>
      <div className="resumeSection"> Education </div>
      <ResumeItem section="University of California, Berkeley"
                  title="b.a. applied mathematics & computer science"
                  content="Regents' and Chancellor's Scholar;
                  Memeber of Upsilon Pi Epsilon, the CS honors society"
                  edu={true} />
      <div className="resumeSection"> Experience </div>
      <ResumeItem section="eBay"
                  title="sofwtare engineering intern"
                  content="Created and then developed a live product aiming
                  to increase engagement and retention on the StubHub platform
                  through a data-oriented approach with impact in customer
                  service efficiency, partnerships, and search engine optimization." />
      <ResumeItem section="Cal Hacks"
                  title="lead designer & chief financial officer"
                  content="Facilitate all branding and user interface design
                  decisions for one of the largest and most renowned hackathons
                  in the world. Maintain responsibilty for a budget of $300,000 in
                  sponsorship funds for our non-profit organization." />
      <ResumeItem section="Feaster"
                  title="ui engineer, branding & marketing designer"
                  content="Develop, design, and engineer the user experiences of
                  landing pages, dashboards, etc. for Feaster, a digital marketing
                  platform in the restaurant industry that provides customers with
                  personalized, preference-based offers on local food and
                  drink in real-time." />
      <div className="resumeSection"> Leadership & Activities </div>
      <ResumeItem section="Innovative Design"
                  title="graphic designer"
                  content="Make conceptual and visual decisions about how to
                  market our club and our mission of making Berkeley beautiful
                  through design." />
      <div className="resumeSection"> Technical Skills </div>
      <ResumeItem section="Code"
                  title="web development"
                  content="React · JavaScript · HTML · CSS · Sass · Git ·
                  Dust · Ruby on Rails" />
    </div>
  )
}

export default Resume;
