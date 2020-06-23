import { FETCH_CITIES } from './actionTypes';
import httpHandle from '../../helpers/fetchHandle';

export const fetchCitiesFail = (payload) => {
  return {
    type: FETCH_CITIES,
    payload,
  };
};
export const fetchCitiesSucceded = (payload) => {
  return {
    type: FETCH_CITIES,
    payload,
  };
};

export const fetchCities = () => async (dispatch) => {
  try {
    const cities = await httpHandle.get('/trips/cities');
    /* istanbul ignore next */
    dispatch(fetchCitiesSucceded(cities.data));
  } catch (error) {
    /* istanbul ignore next */
    const response = {
      error: true,
      message: error.response
        ? error.response.data.message
        : 'Failed connecting to the server, please try again',
    };
    /* istanbul ignore next */
    dispatch(fetchCitiesFail(response));
  }
};
