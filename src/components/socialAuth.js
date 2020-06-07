import React from 'react';
import googleImg from '../assets/google.svg';
import facebookImg from '../assets/facebook.png';

const SocialAuth = () => {
    
    const handlerClick = (service) => window.location.assign(`${process.env.API_BASE_URL}/users/auth/${service}`);
    
    return (
        <div className='socialAuth'> 
            <p>
                or login with:
            </p> 

            <div className='socialAuthImg'>
                <div id='google' onClick={()=>handlerClick('google')}>
                    <img  src={googleImg} />
                </div>
                <div id='facebook' onClick={()=>handlerClick('facebook')}>
                    <img  src={facebookImg} />
                </div>
            </div>
            
        </div>
    )}

export default SocialAuth;
