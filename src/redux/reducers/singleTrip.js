import { GET_TRIP_INFO } from '../actions/actionTypes';

const initialState = {
    loading: false,
    singleTripInfo: { },
    error: null
  };

export default (state = initialState, action)=>{
  switch (action.type) {
      case `${GET_TRIP_INFO}_PENDING`: 
          return  { ...state, error:null, loading: true };

      case `${GET_TRIP_INFO}_FULFILLED`:
           return  { ...state, loading:false, error:null, singleTripInfo: action.payload };
          
      case `${GET_TRIP_INFO}_REJECTED`:
          return  { ...state, loading:false,singleTripInfo: '', error: `${action.payload}`};
          
      default:
          return state;
  }
};
