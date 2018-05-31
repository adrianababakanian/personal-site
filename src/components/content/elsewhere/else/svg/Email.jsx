import React from 'react';
import './../Else.css';

const Email = (props) => {
  const colorStyle = {
    fill: props.colorStyle,
  }
  return (
    <svg id='Layer_1' className="else" data-name='Layer 1' xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 27.94 27.94'>
        <defs />
        <path className='cls-1' style={colorStyle} d='M14,0a14,14,0,1,0,14,14A14,14,0,0,0,14,0ZM5.08,7H22.84c0,.62,0,1.24,0,1.85,0,.08-.16.18-.26.23l-7.34,3.86c-.39.2-.77.42-1.16.6a.52.52,0,0,1-.4,0Q9.48,11.3,5.3,9a.41.41,0,0,1-.21-.27C5.07,8.2,5.08,7.61,5.08,7Zm17.76,4.35q0,4.1,0,8.2A1.3,1.3,0,0,1,21.42,21H6.5a1.28,1.28,0,0,1-1.42-1.34c0-2.85,0-5.69,0-8.54,0-.06,0-.13,0-.24l.48.25q4,2.13,7.94,4.27a.63.63,0,0,0,.69,0q4.09-2.17,8.19-4.32l.45-.22Z'
        />
    </svg>
  )
}

export default Email;
