import { GET_ACCOMMODATION } from '../actions/actionTypes';

const initialState = {
  loading: false,
  accommodationInfo: {},
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ACCOMMODATION}_PENDING`:
      return { ...state, error: null, loading: true };

    case `${GET_ACCOMMODATION}_FULFILLED`:
      return { loading: false, accommodation: action.payload, error: null };

    case `${GET_ACCOMMODATION}_REJECTED`:
      return { ...state, loading: false, error: `${action.payload}` };

    default:
      return state;
  }
};
