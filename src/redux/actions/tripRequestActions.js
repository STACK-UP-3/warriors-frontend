import { GET_TRIPS,GET_TRIP_INFO } from './actionTypes';
import { getTripsService,getSingleTrip } from '../../services/tripRequest';

export const onViewTrips = (filterData)=>({      
        type: GET_TRIPS,
        payload: getTripsService(filterData),
});

export const onViewTrip = (param)=>({      
        type: GET_TRIP_INFO,
        payload: getSingleTrip(param),
});
