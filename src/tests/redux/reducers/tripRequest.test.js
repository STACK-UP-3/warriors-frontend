import  tripRequests from '../../../redux/reducers/tripRequests';
import  singleTripRequest from '../../../redux/reducers/singleTrip';
import { GET_TRIPS, GET_TRIP_INFO } from '../../../redux/actions/actionTypes';

describe('---------> TESTING THE TRIP REQUESTS REDUCER <---------', ()=>{
    it('should test for the TripRequests pending', ()=>{
        const action = {
			type: `${GET_TRIPS}_PENDING`,
        };
		const initialState = { loading: true, tripInfo: {}, error: null };
        const newState = tripRequests(initialState, action);
        
		expect(newState).toEqual(initialState);
    });

    it('should test for the TripRequests fulfilled', ()=>{
        const action = {
            type: `${GET_TRIPS}_FULFILLED`,
            payload: { message:'Ok', status:200 },
        };

		const initialState = { loading: true, tripInfo: {}, error: null };
        const newState = tripRequests(initialState, action);
        
		expect(newState).toEqual({
            loading: false, 
            tripInfo: {
                message:'Ok', 
                status:200,
            }, 
            error: null
        });
    });

    it('should test for the TripRequests rejected', ()=>{
        const action = {
            type: `${GET_TRIPS}_REJECTED`,
            payload: 'TypeError: Failed to fetch',
        };

		const initialState = { loading: true, tripInfo: {}, error: null };
        const newState = tripRequests(initialState, action);
        
		expect(newState).toEqual({
            loading: false, 
            tripInfo: "", 
            error: 'TypeError: Failed to fetch',
        });
    });

});

describe('---------> TESTING THE SINGLE TRIP REQUEST REDUCER <---------', ()=>{
    it('should test for the singleTripRequest pending', ()=>{
        const action = {
			type: `${GET_TRIP_INFO}_PENDING`,
        };
		const initialState = { loading: true, singleTripInfo: {}, error: null };
        const newState = singleTripRequest(initialState, action);
        
		expect(newState).toEqual(initialState);
    });

    it('should test for the singleTripRequest fulfilled', ()=>{
        const action = {
            type: `${GET_TRIP_INFO}_FULFILLED`,
            payload: { message:'Ok', status:200 },
        };

		const initialState = { loading: true, singleTripInfo: {}, error: null };
        const newState = singleTripRequest(initialState, action);
        
		expect(newState).toEqual({
            loading: false, 
            singleTripInfo: {
                message:'Ok', 
                status:200,
            }, 
            error: null
        });
    });

    it('should test for the singleTripRequest rejected', ()=>{
        const action = {
            type: `${GET_TRIP_INFO}_REJECTED`,
            payload: 'TypeError: Failed to fetch',
        };

		const initialState = { loading: true, singleTripInfo: {}, error: null };
        const newState = singleTripRequest(initialState, action);
        
		expect(newState).toEqual({
            loading: false, 
            singleTripInfo: "", 
            error: 'TypeError: Failed to fetch',
        });
    });

});
