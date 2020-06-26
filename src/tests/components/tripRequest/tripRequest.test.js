import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import TripRequest from '../../../components/tripRequests/viewTripRequests/tripRequest';
import configureStore from '../../../redux/configureStore';

const store = configureStore();

describe('*************** Testing the TripRequest  component ***************',()=>{
    let tripReq, wrapper;
    const { location } = window;

    beforeEach(()=>{
        delete window.location;
		window.location = { assign: jest.fn(),search:'' };
        
        const historyMock ={ 
            replace: jest.fn(),
            length: 0,
            location: { 
                pathname: '',
                search: '',
                state: '',
                hash: ''
            },
            action: 'REPLACE',
            push: jest.fn(),
            go: jest.fn(),
            goBack: jest.fn(),
            goForward: jest.fn(),
            block: jest.fn(),
            listen: jest.fn(),
            createHref: jest.fn()
        } ;
        
        tripReq = {
            createdAt: '2020-06-12',
            id: 2,
            line_manager_id: 2,
            status: 'pending',
            tripRequest: [{
                origin:'origin city',
                destination:'destination city',
                type: 'one-way-trip',
                travelReason: 'managerTest',
                accommodation_id: 1
                }],
            trip_id: 2,
            updatedAt: '2020-06-12',
            user_id: 1,
        }
        
        wrapper = mount( 
            <Provider store={ store }> 
                <Router history={historyMock}>
                    <TripRequest key={ tripReq.id } information={ tripReq } currentPage={2} /> 
                </Router>
            </Provider>
        );
        
    });
    
    afterAll(() => {
		window.location = location; 
    });

    it('Should render the Trip Request page correctly', ()=>{
        expect(wrapper).toMatchSnapshot();
    });
    
    it('Should direct the user to view a specific trip', ()=>{
        const historyMock ={ 
            replace: jest.fn(),
            length: 0,
            location: { 
                pathname: '',
                search: '',
                state: '',
                hash: ''
            },
            action: 'REPLACE',
            push: jest.fn(),
            go: jest.fn(),
            goBack: jest.fn(),
            goForward: jest.fn(),
            block: jest.fn(),
            listen: jest.fn(),
            createHref: jest.fn()
             } ;
        
        const wrapper = mount( 
                <Provider store={ store }> 
                    <Router history={historyMock}>
                        <TripRequest key={ tripReq.id } information={ tripReq } currentPage={2} /> 
                    </Router>
                </Provider>
            );
        
        wrapper.find('[className="collection-item waves-effect waves-tea"]').simulate('click');
        
        expect(historyMock.push).toHaveBeenCalled();
    });
});
