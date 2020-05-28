import axios from 'axios';
import { SIGNUP_STARTED, SIGNUP_SUCCEDED, SIGNUP_FAILED } from './actionTypes';

export const signupStarted = () => ({
  type: SIGNUP_STARTED,
});

export const signupSucceded = (payload) => ({
  type: SIGNUP_SUCCEDED,
  payload,
});

export const signupFailed = (payload) => ({
  type: SIGNUP_FAILED,
  payload,
});

export const onSignup = (signupData) => async (dispatch) => {
  try {
    dispatch(signupStarted());
    const res = await axios.post(
      `${process.env.API_BASE_URL}/users/signup`,
      signupData,
    );
    dispatch(signupSucceded(res.data));
  } catch (error) {
    const response = {
      error: true,
      message: error.response
        ? error.response.data.message
        : 'Failed connecting to the server, please try again',
    };
    dispatch(signupFailed(response));
  }
};
