import { GET_TRIPS } from '../actions/actionTypes';

const initialState = {
    loading: false,
    tripInfo: { },
    error: null
  };

export default (state = initialState, action)=>{
  switch (action.type) {
      case `${GET_TRIPS}_PENDING`: 
          return  { ...state, error:null, loading: true };

      case `${GET_TRIPS}_FULFILLED`:
           return  { ...state, loading:false, error:null, tripInfo: action.payload };
          
      case `${GET_TRIPS}_REJECTED`:
          return  { ...state, loading:false,tripInfo: '', error: `${action.payload }`};
          
      default:
          return state;
  }
};
