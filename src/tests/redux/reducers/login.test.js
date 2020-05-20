import jwt from 'jsonwebtoken';
import  loginReducer from '../../../redux/reducers/loginReducer';
import { LOGIN_ACTION } from '../../../redux/actions/actionTypes';

describe('---------> TESTING THE LOGIN REDUCER <---------', ()=>{
    it('should test for the login request pending', ()=>{
        const action = {
			type: `${LOGIN_ACTION}_PENDING`,
        };
		const initialState = { loading: true, userInfo: {}, error: null };
        const newState = loginReducer(initialState, action);
        
		expect(newState).toEqual(initialState);
    });

    it('should test for the login request fulfilled', ()=>{
        const action = {
            type: `${LOGIN_ACTION}_FULFILLED`,
            payload: { message:'You have signed in successfully', status:200 },
        };

		const initialState = { loading: true, userInfo: {}, error: null };
        const newState = loginReducer(initialState, action);
        
		expect(newState).toEqual({
            loading: false, 
            userInfo: {
                message:'You have signed in successfully', 
                status:200,
            }, 
            error: null
        });
    });

    it('should test for the login request rejected', ()=>{
        const action = {
            type: `${LOGIN_ACTION}_REJECTED`,
            payload: 'TypeError: Failed to fetch',
        };

		const initialState = { loading: true, userInfo: {}, error: null };
        const newState = loginReducer(initialState, action);
        
		expect(newState).toEqual({
            loading: false, 
            userInfo: { }, 
            error: 'TypeError: Failed to fetch',
        });
    });

});
