import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import M from 'materialize-css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { onUserLogin } from '../redux/actions/loginActions';
import LoginForm from './loginForm';
import Footer from './footer';
import Message from './requestFail';
import SideContainer from './sideContainer';
import SocialAuth from './socialAuth';

toast.configure();

export default () => {
  const loginStore = useSelector((store) => store.loginData);
  const dispatch = useDispatch();

  useEffect(() => {
    M.AutoInit();
    
    if (loginStore.error) {
      toast.error(<Message />, {
        position: toast.POSITION.TOP_CENTER,
        toastId: 'loginFetchError',
      });
    }

    if (loginStore.userInfo.status === 200) {
      const token = JSON.stringify(loginStore.userInfo.data.access_token);
      localStorage.setItem('token', token);
      return window.location.assign('/dashboard');
    }

    let token;

    token = localStorage.getItem('token');
    /* istanbul ignore next */
    if (token) return window.location.assign('/dashboard');
  });

  const onFormSubmit = (data) => {
    dispatch(onUserLogin(data));
  };

  const loginsideContainerTitle = 'Welcome Back to BareFoot Nomad';
  const loginsideContainerSubtitle = (
    <div>
      <p>
        If you have not created an account please sign up to use our services
      </p>
      <br />

      <h4 onClick={() => window.location.assign('/signup')}>sign up</h4>
    </div>
  );

  return (
    <div className='loginContainer'>
      <div className='main'>
        <SideContainer
          title={loginsideContainerTitle}
          subtitle={loginsideContainerSubtitle}
        />

        <div className='formContainer'>
          <h1> Sign in to BareFoot Nomad </h1>

          <LoginForm
            onSubmit={onFormSubmit}
            userInfo={loginStore.userInfo}
            isLoading={loginStore.loading}
            testdata='loginForm'
          />
          <br />
          <SocialAuth />
        </div>
      </div>

      <Footer />
    </div>
  );
};
