import React from 'react';

export default (props) => (
  <div className='sideContainer'>
    <div className='background'></div>

    <div className='content'>
      <h3>{props.title}</h3>
      {props.subtitle}
    </div>
  </div>
);
