import React from 'react';
import Else from './else/Else';
import Github from './else/svg/Github';
import Linkedin from './else/svg/Linkedin';
import Pinterest from './else/svg/Pinterest';
import Email from './else/svg/Email';
import Dribbble from './else/svg/Dribbble';
import './Elsewhere.css';

const Elsewhere = () => {
  let links = [["Github", "#f29249"], ["Linkedin", "#ebc446"], ["Pinterest", "#b0e695"], ["Email", "#75cff0"], ["Dribbble",  "#475dcc"]];
  let elses = [];
  for (let link of links) {
    elses.push(<Else title={link[0]} color={link[1]} />);
  }
  return (
    <div className="elsewhere">
      <Github colorStyle={"#75cff0"} />
      <Linkedin colorStyle={"#b0e695"}/>
      <Pinterest colorStyle={"#f9886c"}/>
      <Email colorStyle={"#f2ce47"}/>
      <Dribbble colorStyle={"#475dcc"}/>
    </div>
  );
}

export default Elsewhere;
