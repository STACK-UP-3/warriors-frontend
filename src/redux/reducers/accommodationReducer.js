import { CREATE_ACCOMMODATION } from '../actions/actionTypes';

const initialState = {
  loading: false,
  message: '',
  completed: false,
  error: false,
};

export const createAccommodationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ACCOMMODATION:
      return action;
    default:
      return state;
  }
};
