import React from 'react';

export default ()=>{

const token = localStorage.getItem('token');
!token ? window.location.assign("/login") : null;
return(
    <div>
        <h1> Welcome To Your Dashboard </h1>
        <p> Your token is: { token } </p>
        <button 
            className="btn blue darken-3 waves-effect waves-light" 
            onClick={(()=>{localStorage.removeItem("token"); window.location.assign('/login')})} >
            Logout
        </button>
    </div>
)};
