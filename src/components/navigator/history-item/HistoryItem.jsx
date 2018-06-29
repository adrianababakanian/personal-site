import React from 'react';
import './HistoryItem.css';

const HistoryItem = (props) => {
  return (
    <div className='history-item'>
      { props.command }
    </div>
  )
}

export default HistoryItem;
