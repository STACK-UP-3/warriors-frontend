import { FETCH_CITIES, ONEWAY_TRIP_PROCESS } from './actionTypes';
import httpHandle from '../../helpers/fetchHandle';

export const createTripStarted = () => ({
  type: ONEWAY_TRIP_PROCESS,
  loading: true,
});

export const createTripSucceded = (payload) => ({
  type: ONEWAY_TRIP_PROCESS,
  loading: false,
  completed: true,
  error: false,
  payload,
});

export const createTripFailed = (payload) => ({
  type: ONEWAY_TRIP_PROCESS,
  loading: false,
  error: true,
  message: payload.message,
});

export const onCreateTrip = (tripData) => async (dispatch) => {
  try {
    dispatch(createTripStarted());
    const res = await httpHandle.post('/trips', tripData);
    /* istanbul ignore next */
    dispatch(createTripSucceded(res.data));
  } catch (error) {
    /* istanbul ignore next */
    const response = {
      error: true,
      message: error.response
        ? error.response.data.message
        : 'Failed connecting to the server, please try again',
    };
    /* istanbul ignore next */
    dispatch(createTripFailed(response));
  }
};
