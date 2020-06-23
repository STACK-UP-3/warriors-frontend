import {
    ONEWAY_TRIP_PROCESS,
    FETCH_CITIES,
  } from '../../../redux/actions/actionTypes';
  import { onewayTripReducer } from '../../../redux/reducers/onewayTripReducer';
  import { citiesReducer } from '../../../redux/reducers/citiesReducer';
  
  describe('Test cities Reducer', () => {
    it('Should retun initial state', () => {
      expect(citiesReducer(undefined, {})).toEqual([]);
    });
    it('Should return cities', () => {
      const action = {
        type: FETCH_CITIES,
        payload: [],
      };
      expect(citiesReducer(undefined, action)).toEqual([]);
    });
  });
  
  describe('Test oneway trip Reducer', () => {
    const initialState = {
      loading: false,
      message: '',
      completed: false,
      error: false,
    };
    it('Should retun initial state', () => {
      expect(onewayTripReducer(undefined, {})).toEqual(initialState);
    });
    it('Should return oneway trip process info', () => {
      const action = {
        type: ONEWAY_TRIP_PROCESS,
        payload: [],
      };
      expect(onewayTripReducer(undefined, action)).toEqual(action);
    });
  });