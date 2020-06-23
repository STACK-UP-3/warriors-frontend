import { LOGIN_ACTION } from '../actions/actionTypes';

const initialState = {
  loading: false,
  userInfo: {},
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${LOGIN_ACTION}_PENDING`:
      return { ...state, error: null, loading: true };

    case `${LOGIN_ACTION}_FULFILLED`:
      return { loading: false, userInfo: action.payload, error: null };

    case `${LOGIN_ACTION}_REJECTED`:
      return { ...state, loading: false, error: `${action.payload}` };

    default:
      return state;
  }
};
