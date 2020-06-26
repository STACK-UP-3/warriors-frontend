import React, { Component } from 'react';
import SignupForm from './SignupForm';
import SideContainer from './sideContainer';
import Footer from './footer';
import googleImg from '../assets/google.svg';
import facebookImg from '../assets/facebook.png';

const signupTitle = 'Welcome to BareFoot Nomad';
const signupSubTitle = (
  <div>
    <p>
      Join 3000+<br></br> people using<br></br> Barefoot Nomad
    </p>
    <br />
  </div>
);

class Signup extends Component {
  render() {
    return (
      <div className='signupContainer'>
        <div className='main'>
          <SideContainer title={signupTitle} subtitle={signupSubTitle} />

          <div className='formContainer'>
            <h1> Sign up to BareFoot Nomad </h1>

            <SignupForm testdata='signupForm' />

            <br />

            <div className='socialAuth'>
              <p>Or Signup with:</p>

              <div className='socialAuthImg'>
                <div id='google'>
                  <img src={googleImg} />
                </div>
                <div id='facebook'>
                  <img src={facebookImg} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Signup;
