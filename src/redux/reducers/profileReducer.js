import { Get_Profile,Updated_profile } from '../actions/actionTypes';

const initialState = {
    userData: {},
    error:null,
    loading:true
}

export default (state = initialState,action) => {
    switch(action.type) {
        case `${Get_Profile}_PENDING`: 
            return  { 
                ...state, 
                error:null, 
                loading: true 
            };
        case `${Get_Profile}_FULFILLED`:
            return {
                error:null, 
                loading:false,
                userData: {...action.payload.data}
            };
        case `${Get_Profile}_REJECTED`:
            return{
                ...state,
                loading:false,
                error: `${action.payload}`,
            };
        default:
            return state;
    }
}