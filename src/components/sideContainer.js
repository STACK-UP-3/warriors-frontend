import React from 'react';
import backgroundImg from '../assets/background.jpg';

const backgroundImgStyle = {
    backgroundImage: 'url(' + backgroundImg + ')',
}

export default (props)=>(
    <div  className='sideContainer'>
        <div className='background' style={backgroundImgStyle}>
        </div>

        <div className='content'>
          <h2>
                { props.title }
          </h2>
                { props.subtitle }
        </div>
    </div>

);
