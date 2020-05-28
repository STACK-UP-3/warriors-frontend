import {
  SIGNUP_STARTED,
  SIGNUP_SUCCEDED,
  SIGNUP_FAILED,
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  message: '',
  completed: false,
  error: false,
};

export const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_STARTED:
      return {
        completed: false,
        loading: true,
      };
    case SIGNUP_SUCCEDED:
      const data = action.payload;
      return {
        loading: false,
        completed: true,
        message: data.message,
        error: false,
      };
    case SIGNUP_FAILED:
      const res = action.payload;
      return {
        loading: false,
        message: res.message,
        completed: true,
        error: true,
      };
    default:
      return state;
  }
};
