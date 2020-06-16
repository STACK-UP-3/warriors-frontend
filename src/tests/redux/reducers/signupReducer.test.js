import {
  SIGNUP_STARTED,
  SIGNUP_SUCCEDED,
  SIGNUP_FAILED,
} from '../../../redux/actions/actionTypes';
import { signupReducer } from '../../../redux/reducers/signupReducer';

const initialState = {
  loading: false,
  message: '',
  completed: false,
  error: false,
};

describe('Test Signup Reducer', () => {
  it('Should retun initial state', () => {
    expect(signupReducer(undefined, {})).toEqual(initialState);
  });
  it('SHould return loading state', () => {
    expect(signupReducer(undefined, { type: SIGNUP_STARTED })).toEqual({
      completed: false,
      loading: true,
    });
  });
  it('SHould return succes state', () => {
    expect(
      signupReducer(undefined, {
        type: SIGNUP_SUCCEDED,
        payload: { message: 'message' },
      }),
    ).toEqual({
      loading: false,
      completed: true,
      message: 'message',
      error: false,
    });
  });
  it('SHould return failed state', () => {
    expect(
      signupReducer(undefined, {
        type: SIGNUP_FAILED,
        payload: { message: 'failed' },
      }),
    ).toEqual({
      loading: false,
      message: 'failed',
      completed: true,
      error: true,
    });
  });
});
