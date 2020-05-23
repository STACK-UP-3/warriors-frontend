import React from 'react';

const SocialAuth = () => {
    
    const handlerClick = (service) => window.location.assign(`${process.env.API_BASE_URL}/users/auth/${service}`);
    
    return (
        <div className='socialAuth'> 
            <p>
                or login with:
            </p> 

            <div className='socialAuthImg'>
                <div id='google' onClick={()=>handlerClick('google')}>
                    <img  src="../assets/google.svg" />
                </div>
                <div id='facebook' onClick={()=>handlerClick('facebook')}>
                    <img  src="../assets/facebook.png" />
                </div>
            </div>
            
        </div>
    )}

export default SocialAuth;
