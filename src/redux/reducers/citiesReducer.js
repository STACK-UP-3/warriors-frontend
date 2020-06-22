import { FETCH_CITIES } from '../actions/actionTypes';

const initialState = [];

export const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITIES:
      const data = action.payload;
      return data;
    default:
      return state;
  }
};
