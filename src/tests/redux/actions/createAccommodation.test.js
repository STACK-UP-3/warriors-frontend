import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  createAccommodationStarted,
  createAccommodationSucceded,
  createAccommodationFailed,
  oncreateAccommodation,
} from '../../../redux/actions/accommodations';
import { CREATE_ACCOMMODATION } from '../../../redux/actions/actionTypes';

describe('Test create accommodation actions', () => {
  const middleware = [thunk];
  const mockStore = configureMockStore(middleware);
  const data = {
    origin: 'Kigali',
    destination: 'Bujumbura',
    date: '2020-10-10',
    returnDate: '2020-10-12',
  };
  afterEach(() => {
    fetchMock.restore();
  });

  it('Should start the action', () => {
    expect(createAccommodationStarted()).toEqual({
      type: CREATE_ACCOMMODATION,
      loading: true,
    });
  });

  it('Should dispatch fail action', () => {
    expect(createAccommodationFailed({})).toEqual({
      type: CREATE_ACCOMMODATION,
      loading: false,
      error: true,
      message: undefined,
    });
  });

  it('Should dispatch success action', () => {
    expect(createAccommodationSucceded({})).toEqual({
      type: CREATE_ACCOMMODATION,
      loading: false,
      error: false,
      completed: true,
      payload: {},
    });
  });

  it('Should create accommodation action', () => {
    fetchMock.postOnce('/accommodations', data);
    const store = mockStore({ onewayTrip: {} });
    const expectedActions = [{ type: CREATE_ACCOMMODATION, loading: true }];
    store.dispatch(oncreateAccommodation(data));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
