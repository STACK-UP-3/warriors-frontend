import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { onSignup } from '../redux/actions/signupAction';
import SyncLoader from 'react-spinners/SyncLoader';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import M from 'materialize-css'; // Materialize JS ~ https://www.youtube.com/watch?v=EboLM8OjlP4

export class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSignup = async (event) => {
    event.preventDefault();
    const signupData = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
    };
    await this.props.signupProcess(signupData);
    toast.info(this.props.signup.message);
    this.props.signup.error
      ? null
      : document.getElementById('signupForm').reset();
  };

  onCloseToast = () => {
    window.location.replace('/');
  };

  render() {
    return (
      <div>
        <form
          id='signupForm'
          className='col s12'
          testdata='signupForm'
          onSubmit={this.handleSignup}>
          <div className='form-content'>
            <div className='row' id='textInput'>
              <div className='input-field col s12'>
                <input
                  name='firstname'
                  id='firstname'
                  type='text'
                  className='validate'
                  testdata='inputChange'
                  onChange={this.handleChange}
                />
                <label htmlFor='firstname'>First Name</label>
              </div>
            </div>
            <div className='row' id='textInput'>
              <div className='input-field col s12'>
                <input
                  name='lastname'
                  id='lastname'
                  type='text'
                  className='validate'
                  testdata='inputChange'
                  onChange={this.handleChange}
                  disabled={this.props.signup.loading}
                />
                <label htmlFor='lastname'>Last Name</label>
              </div>
            </div>

            <div className='row' id='textInput'>
              <div className='input-field col s12'>
                <input
                  name='email'
                  id='email'
                  type='email'
                  className='validate'
                  testdata='inputChange'
                  onChange={this.handleChange}
                  disabled={this.props.signup.loading}
                />
                <label htmlFor='email'>Email</label>
              </div>
            </div>

            <div className='row' id='textInput'>
              <div className='input-field col s12'>
                <input
                  name='password'
                  id='password'
                  type='password'
                  className='validate'
                  onChange={this.handleChange}
                  disabled={this.props.signup.loading}
                />
                <label htmlFor='password'>Password</label>
              </div>
            </div>

            <div className='contentFooter'>
              {this.props.signup.error ? (
                <p className='error'>{this.props.signup.message}</p>
              ) : (
                <ToastContainer
                  position='top-center'
                  autoClose={false}
                  hideProgressBar={true}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable={false}
                  pauseOnHover
                  onClick={this.onCloseToast}
                />
              )}
              <p>
                Have an account already? <a href='/login'>Login</a>
              </p>
              <br></br>
            </div>
          </div>

          <div className='form-footer'>
            <div className='submitBtn'>
              <button
                className='btn waves-effect waves-light'
                type='submit'
                id='submit'
                disabled={
                  !this.state.firstname ||
                  !this.state.lastname ||
                  !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                    this.state.email,
                  ) ||
                  !this.state.password
                }>
                {this.props.signup.loading ? (
                  <SyncLoader
                    size={5}
                    margin={5}
                    color={'#fff'}
                    loading={this.props.signup.loading}
                  />
                ) : (
                  'Signup'
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

SignupForm.propTypes = {
  signupProcess: PropTypes.func.isRequired,
};

const mapStateToProps = (response) => ({ signup: response.signup });
const mapDispatchToProps = (dispatch) => ({
  signupProcess: (signupData) => dispatch(onSignup(signupData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
