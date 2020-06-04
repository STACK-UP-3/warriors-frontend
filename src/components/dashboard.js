import React from 'react';

export default ()=>{

const token = localStorage.getItem('token');

return(
    <div>
        <h1> Welcome To Your Dashboard </h1>
        <p> Your token is: { token } </p>
    </div>
)};
