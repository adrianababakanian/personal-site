import React from 'react';
import './Grid.css';
import sand from './../../../assets/images/sand.jpg';
import tree from './../../../assets/images/tree.jpeg';

const Grid = () => {
  return (
    <div className="grid">
      <div className="row">
        <div className="column right">
          <img src={sand} />
          <img src={tree} />
        </div>
        <div className="column left">
          <img src={tree} />
          <img src={sand} />
        </div>
      </div>
    </div>
  )
}

export default Grid;
