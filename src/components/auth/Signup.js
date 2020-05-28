import React, { Component } from 'react';
import SignupForm from './SignupForm';
import SideContainer from './SideContainer';
import Footer from '../common/Footer';

const signupTitle = 'Welcome to BareFoot Nomad';
const signupSubTitle = (
  <div>
    <p>
      Join 3000+<br></br> people using<br></br> Barefoot Nomad
    </p>
    <br />
  </div>
);

export class Signup extends Component {
  render() {
    return (
      <div className='signupContainer'>
        <div className='main'>
          <SideContainer title={signupTitle} subtitle={signupSubTitle} />
          <div className='formContainer'>
            <h4 className='center'> Sign up to BareFoot Nomad </h4>
            <br></br>
            <SignupForm testdata='signupForm' />
            <br></br>
            <p className='center-align'>Or Signup with:</p>
            <br></br>
            <div className='socialAuth container center'>
              <a href=''>
                <img id='google' src='../assets/google.svg' />
              </a>
              <a href=''>
                <img id='facebook' src='../assets/facebook.png' />
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Signup;
