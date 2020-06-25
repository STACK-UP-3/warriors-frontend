import { CREATE_ACCOMMODATION } from '../../../redux/actions/actionTypes';
import { createAccommodationReducer } from '../../../redux/reducers/accommodationReducer';

describe('Test create accommodation Reducer', () => {
  const initialState = {
    loading: false,
    message: '',
    completed: false,
    error: false,
  };
  it('Should retun initial state', () => {
    expect(createAccommodationReducer(undefined, {})).toEqual(initialState);
  });
  it('Should return process info', () => {
    const action = {
      type: CREATE_ACCOMMODATION,
      payload: [],
    };
    expect(createAccommodationReducer(undefined, action)).toEqual(action);
  });
});
