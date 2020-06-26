import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import Filters from '../../../components/tripRequests/viewTripRequests/filters';
import configureStore from '../../../redux/configureStore';

describe('*************** Testing the Filters  component ***************',()=>{

    const store = configureStore();
    let statusChange,locationMock,historyMock, wrapper;

    beforeEach(()=>{
        statusChange = jest.fn();
        locationMock = {
                pathname: '/viewtrips/accepted',
                search: '',
                state: '',
                hash: ''
        };
        
        historyMock ={ 
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
            };
        
        wrapper =  mount(
            <Provider store={ store }> 
                <Router location={locationMock} history={historyMock}>
                    <Filters statusChange={ statusChange }  />
                </Router>
            </Provider>
        );
    });
    
    it('Should render the filters component correctly', ()=>{
        expect(wrapper).toMatchSnapshot();
    });
});
