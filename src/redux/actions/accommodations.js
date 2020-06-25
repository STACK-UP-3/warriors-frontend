import { CREATE_ACCOMMODATION } from './actionTypes';
import httpHandle from '../../helpers/fetchHandle';

export const createAccommodationStarted = () => ({
  type: CREATE_ACCOMMODATION,
  loading: true,
});

export const createAccommodationSucceded = (payload) => ({
  type: CREATE_ACCOMMODATION,
  loading: false,
  completed: true,
  error: false,
  payload,
});

export const createAccommodationFailed = (payload) => ({
  type: CREATE_ACCOMMODATION,
  loading: false,
  error: true,
  message: payload.message,
});

export const oncreateAccommodation = (accommodationData) => async dispatch => {
  try {
    dispatch(createAccommodationStarted());
    const res = await httpHandle.post('/accommodations', accommodationData);
    /* istanbul ignore next */
    dispatch(createAccommodationSucceded(res.data));
  } catch (error) {
    /* istanbul ignore next */
    const response = {
      error: true,
      message: error.response
        ? error.response.data.message
        : 'Failed connecting to the server, please try again',
    };
    /* istanbul ignore next */
    dispatch(createAccommodationFailed(response));
  }
};
