import React, { Component, Components } from 'react';
import Github from './svg/Github';
import Linkedin from './svg/Linkedin';
import Pinterest from './svg/Pinterest';
import Email from './svg/Email';
import Dribbble from './svg/Dribbble';

import './Else.css';

const Else = (props) => {
  const colorStyle = {
    fill: props.color,
  }
  return (
    <div className="else">
      {/* <svg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 32.58 31.77'>
          <defs />
          <path className='cls-1' style={colorStyle} d='M16.29,0a16.29,16.29,0,0,0-5.15,31.75c.81.15,1.11-.35,1.11-.79s0-1.41,0-2.77C7.7,29.18,6.74,26,6.74,26a4.31,4.31,0,0,0-1.81-2.38c-1.48-1,.11-1,.11-1a3.42,3.42,0,0,1,2.5,1.68,3.47,3.47,0,0,0,4.74,1.35,3.48,3.48,0,0,1,1-2.18C9.7,23.08,5.9,21.68,5.9,15.44a6.3,6.3,0,0,1,1.68-4.37,5.86,5.86,0,0,1,.16-4.31s1.37-.44,4.48,1.67a15.44,15.44,0,0,1,8.16,0c3.11-2.11,4.48-1.67,4.48-1.67A5.85,5.85,0,0,1,25,11.07a6.29,6.29,0,0,1,1.67,4.37c0,6.26-3.81,7.63-7.44,8a3.89,3.89,0,0,1,1.11,3c0,2.18,0,3.93,0,4.47s.29.94,1.12.78A16.29,16.29,0,0,0,16.29,0Z'
          />
      </svg> */}
      {React.createElement("Dribbble", {})}
      {/* <MyComponent style={colorStyle} /> */}
      {/* <Dribbble colorStyle={colorStyle} /> */}
    </div>
  );
}


export default Else;
