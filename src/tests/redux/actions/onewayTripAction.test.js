import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { onCreateTrip } from '../../../redux/actions/tripActions';
import {
  fetchCities,
  fetchCitiesFail,
  fetchCitiesSucceded,
} from '../../../redux/actions/citiesAction';
import {
  ONEWAY_TRIP_PROCESS,
  FETCH_CITIES,
} from '../../../redux/actions/actionTypes';

describe('Test fetch cities action', () => {
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

  it('Should run citiesAction', () => {
    expect(fetchCitiesFail([])).toEqual({ type: FETCH_CITIES, payload: [] });
    expect(fetchCitiesSucceded([])).toEqual({
      type: FETCH_CITIES,
      payload: [],
    });
  });

  it('Should create oneway trip action', () => {
    fetchMock.postOnce('/trips', data);
    const store = mockStore({ onewayTrip: {} });
    const expectedActions = [{ type: ONEWAY_TRIP_PROCESS, loading: true }];
    store.dispatch(onCreateTrip(data));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Should fetch cities action', () => {
    fetchMock.getOnce('/trips/cities', []);
    const store = mockStore({ cities: {} });
    const expectedActions = [];
    store.dispatch(fetchCities());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
