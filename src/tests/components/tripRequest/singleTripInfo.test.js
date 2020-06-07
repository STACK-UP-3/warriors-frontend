import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import SingleTripInfo from '../../../components/tripRequests/viewTripRequests/singleTripInfo';
import configureStore from '../../../redux/configureStore';
import { Router } from 'react-router-dom';

describe('*************** Testing the single Trip info component With full information ***************',()=>{

    const store = configureStore();
    let data, accommodationData, wrapper;
    const { location } = window;

    beforeEach(()=>{
        delete window.location;
        window.location = { assign: jest.fn(),search:'' };
        data = {
                email: "firaduk@yahoo.com",
                manager: "NDOLI Jack",
                name:'User For Testing',
                
                result: {
                    id: 2, 
                    trip_id: 2, 
                    status: "pending", 
                    tripRequest: [{
                        origin:'origin city',
                        destination:'destination city',
                        dateOfReturn:'2020-06-15',
                        dateOfTravel:'2020-07-15',
                        travelReason: 'managerTest',
                        accommodation_id: 1,
                        }]},
            };
        
        accommodationData={
            data: {
                status: 200, 
                message: 'Accommodation retrieved successfully', 
                data: {
                    cost: '$78',
                    createdAt: '2020-06-15',
                    description: 'A cool Place',
                    id: 1,
                    images: [{
                        details: 'Back view of accommodation',
                        id: 2,
                        url: 'https://res.cloudinary.com/dcna45id5/image/upload/v1586427877/samples/landscapes/nature-mountains.jpg'
                    }],
                    location: 'Kigali',
                    name: 'Panter Hotel',
                    owner: 'Robert',
                    rooms: [{}],
                    services: [{
                        id: 1, 
                        name: 'service1', 
                        description: 'Best Hotel Ever', 
                        cost: '$54'
                    }],
                    status: 'available',
                    updatedAt: '2020-06-15',
                }
                }
        }
        
        wrapper =  mount(
            <Provider store={ store }> 
                <SingleTripInfo information={ data } accommodation={accommodationData} />
            </Provider>
        );
    });
    
    afterAll(() => {
		window.location = location;
    });
    
    it('Should render the SingleTripInfo component correctly', ()=>{
        expect(wrapper).toMatchSnapshot();
    });
    
    it('Should test on click buttons of the SingleTripInfo component correctly', ()=>{
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
        
        wrapper =  mount(
            <Provider store={ store }> 
                <Router history={historyMock}>
                    <SingleTripInfo information={ data } accommodation={accommodationData} />
                </Router>
            </Provider>
        );
        
        wrapper.find('[className="backToTrips"]').simulate('click');
        wrapper.find('button').simulate('click');
        
        expect(window.location.assign).toHaveBeenCalled();
    });
    
});

describe('*************** Testing the single Trip info  component missing some information and Disabled button  ***************',()=>{

    const store = configureStore();
    let data, accommodationData, wrapper;
    const { location } = window;

    beforeEach(()=>{
        delete window.location;
        window.location = { assign: jest.fn(),search:'' };
        data = {
                email: "firaduk@yahoo.com",
                manager: "NDOLI Jack",
                name:'User For Testing',
                
                result: {
                    id: 2, 
                    trip_id: 2, 
                    status: "accepted", 
                    tripRequest: [{
                        origin:'origin city',
                        destination:'destination city',
                        dateOfReturn:'2020-06-15',
                        dateOfTravel:'2020-07-15',
                        travelReason: 'managerTest',
                        accommodation_id: 1,
                        }]},
            };
        
        accommodationData={
            data: {
                status: 200, 
                message: 'Accommodation retrieved successfully', 
                data: {
                    cost: '$78',
                    createdAt: '2020-06-15',
                    description: null,
                    id: 1,
                    images: [{
                        details: 'Back view of accommodation',
                        id: 2,
                        url: 'https://res.cloudinary.com/dcna45id5/image/upload/v1586427877/samples/landscapes/nature-mountains.jpg'
                    }],
                    location: 'Kigali',
                    name: null,
                    owner: 'Robert',
                    rooms: [{}],
                    services: [{
                        id: 1, 
                        name: null, 
                        description: null, 
                        cost: null
                    }],
                    status: 'available',
                    updatedAt: '2020-06-15',
                }
                }
        }
        
        wrapper =  mount(
            <Provider store={ store }> 
                <SingleTripInfo information={ data } accommodation={accommodationData} />
            </Provider>
        );
    });
    
    afterAll(() => {
		window.location = location;
    });
    
    it('Should render the SingleTripInfo component correctly', ()=>{
        expect(wrapper).toMatchSnapshot();
    });
    
    it('Should test on click buttons of the SingleTripInfo component correctly', ()=>{
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
        
        wrapper =  mount(
            <Provider store={ store }> 
                <Router history={historyMock}>
                    <SingleTripInfo information={ data } accommodation={accommodationData} />
                </Router>
            </Provider>
        );
        
        wrapper.find('[className="backToTrips"]').simulate('click');
        wrapper.find('button').simulate('click');
        
        expect(historyMock.push).toHaveBeenCalled();
    });
    
});