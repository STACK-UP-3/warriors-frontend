import { ONEWAY_TRIP_PROCESS } from '../actions/actionTypes';

const initialState = {
  loading: false,
  message: '',
  completed: false,
  error: false,
};

export const onewayTripReducer = (state = initialState, action) => {
  switch (action.type) {
    case ONEWAY_TRIP_PROCESS:
      return action;
    default:
      return state;
  }
};
