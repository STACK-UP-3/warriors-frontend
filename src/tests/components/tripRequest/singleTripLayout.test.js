import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import mockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import SingleTripLayout from '../../../components/tripRequests/viewTripRequests/singleTripLayout';

describe('*************** Testing the SingleTripLayout  component ***************',()=>{
    
    let store, wrapper ;
    let { location } = window;

    
    beforeEach(()=>{
        delete window.location;
		window.location = { pathname: '/viewtrips/accepted', assign: jest.fn(), search:'' };
        
        store = mockStore([thunk])({
            accommodation:{
                accommodation: {
                    data: {
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
                                name: 'Panter Hotel',
                                owner: 'Robert',
                                rooms: [{}],
                                services: [{
                                    id: 1, 
                                    name: 'service1', 
                                    description: null, 
                                    cost: '$54'
                                }],
                                status: 'available',
                                updatedAt: '2020-06-15',
                            }
                            }
                    }, 
                    status: 200, 
                    statusText: 'OK',
                    },
                error: null,
                loading: false
            },
            
            tripRequest: {
                loading: false,
                singleTripInfo: {
                    data: {
                        data: {
                            name: 'TESTING User', 
                            email: 'testingUser@single.trip', 
                            manager: 'TESTING Manager', 
                            result: {
                                createdAt:' 2020-06-12',
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
                                updatedAt:' 2020-06-12',
                                user_id: 1,
                                }
                            },
                        
                        message: 'Here is the trip information that you requested: ',
                        status: 200,
                    }, 
                    status: 200, 
                    statusText: 'OK',
                    },
                error: null,
            }, 
        });

        wrapper = mount( 
            <Provider store={ store }> 
                <MemoryRouter>
                    <SingleTripLayout match={ {params:{id:1}} } />
                </MemoryRouter>
            </Provider>
        );
        
    });

    afterAll(() => {
		window.location = location;
    });
    
    it('Should render the SingleTripLayout page correctly', ()=>{
        expect(wrapper).toMatchSnapshot();
    });

it('Should test Backend connection Error', ()=>{
    const store = mockStore([thunk])({
        accommodation:{},
        tripRequest: {
            loading: false,
            singleTripInfo: {
                name:'Error',
                message: 'Network Error',
        }, 
    },
    });
    
    const wrapper = mount( 
        <Provider store={ store }> 
            <MemoryRouter>
                    <SingleTripLayout match={ {params:{id:1}} } />
            </MemoryRouter>
        </Provider>
    );
    
    expect(wrapper).toMatchSnapshot();
});

it('Should redirect user to login page', ()=>{
    const store = mockStore([thunk])({
        accommodation:{},
        tripRequest: {
            loading: false,
            singleTripInfo: {
                name:'Error',
                message: 'Ok',
                response:{
                    data:{
                        message:'Unauthorised Access: You have to login to Proceed',
                        }
                    }
        }, 
    },
    });
    
    const wrapper = mount( 
        <Provider store={ store }> 
            <MemoryRouter>
                    <SingleTripLayout match={ {params:{id:1}} } />
            </MemoryRouter>
        </Provider>
    );
    
    wrapper.find('[className="backToTrips"]').simulate('click');
    expect(window.location.assign).toHaveBeenCalled();
});



it('Should Test when the searched trip is not found in the Backend', ()=>{
    const store = mockStore([thunk])({
        accommodation:{},
        tripRequest: {
            loading: false,
            singleTripInfo: {
                name:'Error',
                message: 'Ok',
                response:{
                    data:{
                        message:'not found',
                        }
                    }
        }, 
    },
    });
    
    const wrapper = mount( 
        <Provider store={ store }> 
            <MemoryRouter>
                    <SingleTripLayout match={ {params:{id:1}} } />
            </MemoryRouter>
        </Provider>
    );
    expect(wrapper).toMatchSnapshot();
});

it('Should Test bad trip_id input', ()=>{
    const store = mockStore([thunk])({
        accommodation:{},
        tripRequest: {
            loading: false,
            singleTripInfo: {
                name:'Error',
                message: 'Ok',
                response:{
                    data:{
                        message:'trip_id must be a number',
                        }
                    }
        }, 
    },
    });
    
    const wrapper = mount( 
        <Provider store={ store }> 
            <MemoryRouter>
                    <SingleTripLayout match={ {params:{id:1}} } />
            </MemoryRouter>
        </Provider>
    );
    expect(wrapper).toMatchSnapshot();
});

});
