import  accommodation from '../../../redux/reducers/accomodation';
import { GET_ACCOMMODATION } from '../../../redux/actions/actionTypes';

describe('---------> TESTING THE ACCOMMODATION REDUCER <---------', ()=>{
    it('should test for the accommodation pending', ()=>{
        const action = {
			type: `${GET_ACCOMMODATION}_PENDING`,
        };
		const initialState = { loading: true, accommodationInfo: {}, error: null };
        const newState = accommodation(initialState, action);
        
		expect(newState).toEqual(initialState);
    });

    it('should test for the accommodation fulfilled', ()=>{
        const action = {
            type: `${GET_ACCOMMODATION}_FULFILLED`,
            payload: { message:'Ok', status:200 },
        };

		const initialState = { loading: true, accommodationInfo: {}, error: null };
        const newState = accommodation(initialState, action);
        
		expect(newState).toEqual({
            loading: false, 
            accommodation: {
                message:'Ok', 
                status:200,
            }, 
            error: null
        });
    });

    it('should test for the accommodation rejected', ()=>{
        const action = {
            type: `${GET_ACCOMMODATION}_REJECTED`,
            payload: 'TypeError: Failed to fetch',
        };

		const initialState = { loading: true, accommodationInfo: {}, error: null };
        const newState = accommodation(initialState, action);
        
		expect(newState).toEqual({
            loading: false, 
            accommodationInfo: {}, 
            error: 'TypeError: Failed to fetch',
        });
    });

});
