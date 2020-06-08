import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from '../../../redux/actions/signupAction';
import {
  SIGNUP_STARTED,
  SIGNUP_SUCCEDED,
  SIGNUP_FAILED,
} from '../../../redux/actions/actionTypes';

describe('Test Signup Actions', () => {
  it('Should create action loading', () => {
    expect(actions.signupStarted().type).toEqual(SIGNUP_STARTED);
  });
  it('Should create action success', () => {
    const expected = {
      type: SIGNUP_SUCCEDED,
      payload: {
        message: 'success',
      },
    };
    expect(actions.signupSucceded(expected.payload)).toEqual(expected);
  });
  it('Should create action failed', () => {
    const expected2 = {
      type: SIGNUP_FAILED,
      payload: {
        message: 'failed',
      },
    };
    expect(actions.signupFailed(expected2.payload)).toEqual(expected2);
  });
});

describe('Test signup async action', () => {
  const middleware = [thunk];
  const mockStore = configureMockStore(middleware);
  const data = {
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'username@gmail.com',
    password: 'password123',
  };
  afterEach(() => {
    fetchMock.restore();
  });
  it('SHould create Signup action', () => {
    fetchMock.postOnce('/signup', data);
    const store = mockStore({ signup: {} });
    const expectedActions = [{ type: SIGNUP_STARTED }];
    store.dispatch(actions.onSignup(data));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
