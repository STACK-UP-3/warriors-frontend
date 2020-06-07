import { GET_ACCOMMODATION } from './actionTypes';
import { getAccommodationDetails } from '../../services/tripRequest';

export const getAccomodation = (param)=>({      
        type: GET_ACCOMMODATION,
        payload: getAccommodationDetails(param),
});