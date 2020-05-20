import React from 'react';

export default (props)=>(
    <div  className='sideContainer'>
        <div className='background'>
        </div>

        <div className='content'>
          <h2>
                { props.title }
          </h2>
                { props.subtitle }
        </div>
    </div>

);
