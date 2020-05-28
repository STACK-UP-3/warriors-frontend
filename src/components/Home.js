import React from 'react';

export class Home extends React.Component {
  render() {
    return (
      <div>
        <div className='container'>
          Welcome to Barefoot Nomad
          <div className='center'>
            <a
              href='/signup'
              className='wave-effect wave-light btn blue darken-3 hoverable home-auth-btn'>
              Signup
            </a>
            <a
              href='/login'
              className='wave-effect wave-light btn blue darken-3 hoverable home-auth-btn'>
              Login
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
