import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import mockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import TripRequestsLayout from '../../../components/tripRequests/viewTripRequests/tripRequestsLayout';

describe('*************** Testing the TripRequestsLayout  component ***************',()=>{
    
    let store, wrapper ;
    let { location } = window;

    
    beforeEach(()=>{
        delete window.location;
		window.location = { pathname: '/viewtrips/accepted', assign: jest.fn(), search:'' };
        
        store = mockStore([thunk])({
            tripRequests: {
                loading: false,
                tripInfo: {
                    data: {
                        data: {
                            nextPage: {page: 4, limit: 2},
                            numberOfPages: 6,
                            pageInformation: "You are on Page 3 of 6 Pages",
                            previousPage: {page: 2, limit: 2},
                            result: [
                            {
                                id: 24, trip_id: 22, user_id: 1, line_manager_id: 2, status: "accepted", tripRequest:[
                                    {id: 22, user_id: 1, origin: "Kigali", destination: "Kampala", dateOfTravel: "2020-10-20",travelReason: "Visiting",type: "one-way-trip"}
                                ]
                            },
                            {
                                id: 23, trip_id: 21, user_id: 1, line_manager_id: 2, status: "accepted", tripRequest:[
                                    { id: 21, user_id: 1, origin: "Kigali", destination: "Kampala", dateOfTravel: "2020-10-20",travelReason: "Visiting",type: "one-way-trip" }
                                ]
                            },
                            ]
                            },
                        message: 'All The Trips are:  ',
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
                <MemoryRouter initialEntries={['/viewtrips/accepted']}>
                    <TripRequestsLayout />
                </MemoryRouter>
            </Provider>
        );
        
    });

    afterAll(() => {
		window.location = location;
    });
    
    it('Should render the TripRequestsLayout page correctly', ()=>{
        expect(wrapper).toMatchSnapshot();
    });

it('Should render Skeleton when when loading', ()=>{
    
    const store = mockStore([thunk])({
        tripRequests: {
            loading: true,
            tripInfo: {}, 
    },
    });
    
    const wrapper = mount( 
        <Provider store={ store }> 
            <MemoryRouter initialEntries={['/viewtrips/accepted']}>
                    <TripRequestsLayout />
            </MemoryRouter>
        </Provider>
    );
    
    expect(wrapper).toMatchSnapshot();
});


it('Should test Backend connection Error', ()=>{
    
    const store = mockStore([thunk])({
        tripRequests: {
            loading: false,
            tripInfo: {
                name:'Error',
                message: 'Network Error',
        }, 
    },
    });
    
    const wrapper = mount( 
        <Provider store={ store }> 
            <MemoryRouter initialEntries={['/viewtrips/accepted']}>
                    <TripRequestsLayout />
            </MemoryRouter>
        </Provider>
    );
    
    expect(wrapper).toMatchSnapshot();
});

it('Should redirect user to login page because user logged out', ()=>{
    const store = mockStore([thunk])({
        tripRequests: {
            loading: false,
            tripInfo: {
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
            <MemoryRouter initialEntries={['/viewtrips/accepted']}>
                    <TripRequestsLayout />
            </MemoryRouter>
        </Provider>
    );
    
    wrapper.find('[className="activeMenuItem black-text sidenav-close"]').at(1).simulate('click');
    expect(window.location.assign).toHaveBeenCalled();
});

it('Should redirect user to login page because No token is provided', ()=>{
    const store = mockStore([thunk])({
        tripRequests: {
            loading: false,
            tripInfo: {
                name:'Error',
                message: 'Ok',
                response:{
                    data:{
                        message:'No token provided or Token expired',
                        }
                    }
        }, 
    },
    });
    
    const wrapper = mount( 
        <Provider store={ store }> 
            <MemoryRouter initialEntries={['/viewtrips/accepted']}>
                    <TripRequestsLayout />
            </MemoryRouter>
        </Provider>
    );
    
    wrapper.find('[className="activeMenuItem black-text sidenav-close"]').at(1).simulate('click');
    expect(window.location.assign).toHaveBeenCalled();
});

it('Should redirect user to login page because ELSE PATH ', ()=>{
    const store = mockStore([thunk])({
        tripRequests: {
            loading: false,
            tripInfo: {
                name:'Error',
                message: 'Ok',
                response:{
                    data:{
                        message:'XXXXXXXXXXXXXX',
                        }
                    }
        }, 
    },
    });
    
    const wrapper = mount( 
        <Provider store={ store }> 
            <MemoryRouter initialEntries={['/viewtrips/accepted']}>
                    <TripRequestsLayout />
            </MemoryRouter>
        </Provider>
    );
    
    wrapper.find('[className="activeMenuItem black-text sidenav-close"]').at(1).simulate('click');
});


it('Should test In case no results found', ()=>{
    const store = mockStore([thunk])({
        tripRequests: {
            loading: false,
            tripInfo: {
                data: {
                    data: {
                        nextPage: {page: 4, limit: 2},
                        numberOfPages: 6,
                        pageInformation: "You are on Page 3 of 6 Pages",
                        previousPage: {page: 2, limit: 2},
                        result: null
                    }
        }, 
    },
            }
    });
    
    const wrapper = mount( 
        <Provider store={ store }> 
            <MemoryRouter initialEntries={['/viewtrips/accepted']}>
                    <TripRequestsLayout />
            </MemoryRouter>
        </Provider>
    );
    
    expect(wrapper).toMatchSnapshot();
});


it('Should test PAGINATION page change', ()=>{
    
    const previousPageMock= jest.spyOn(wrapper.find('[id="prevPage"]').props(), 'onClick');
    
    const nextPageMock= jest.spyOn(wrapper.find('[id="nextPage"]').props(), 'onClick');
    
    wrapper.find('[id="nextPage"]').props().onClick(); 
    wrapper.find('[id="prevPage"]').props().onClick(); 
        
    expect(nextPageMock).toHaveBeenCalled();
    expect(previousPageMock).toHaveBeenCalled();
});

it('Should test PAGINATION page else paths No previous ', ()=>{
    const store = mockStore([thunk])({
        tripRequests: {
            loading: false,
            tripInfo: {
                data: {
                    data: {
                        nextPage: {page: 2, limit: 2},
                        numberOfPages: 6,
                        pageInformation: "You are on Page 1 of 6 Pages",
                        result: [
                        {
                            id: 24, trip_id: 22, user_id: 1, line_manager_id: 2, status: "accepted", tripRequest:[
                                {id: 22, user_id: 1, origin: "Kigali", destination: "Kampala", dateOfTravel: "2020-10-20",travelReason: "Visiting",type: "one-way-trip"}
                            ]
                        },
                        {
                            id: 23, trip_id: 21, user_id: 1, line_manager_id: 2, status: "accepted", tripRequest:[
                                { id: 21, user_id: 1, origin: "Kigali", destination: "Kampala", dateOfTravel: "2020-10-20",travelReason: "Visiting",type: "one-way-trip" }
                            ]
                        },
                        ]
                        },
                    message: 'All The Trips are:  ',
                    status: 200,
                }, 
                status: 200, 
                statusText: 'OK',
                },
            error: null,
        }, 
    });
    
    const wrapper = mount( 
        <Provider store={ store }> 
            <MemoryRouter initialEntries={['/viewtrips/accepted']}>
                    <TripRequestsLayout />
            </MemoryRouter>
        </Provider>
    );
    
    const previousPageMock= jest.spyOn(wrapper.find('[id="prevPage"]').props(), 'onClick');
    wrapper.find('[id="prevPage"]').props().onClick(); 
    
    expect(previousPageMock).toHaveBeenCalled();
});


it('Should test PAGINATION page else paths no Next', ()=>{
    const store = mockStore([thunk])({
        tripRequests: {
            loading: false,
            tripInfo: {
                data: {
                    data: {
                        numberOfPages: 3,
                        pageInformation: "You are on Page 3 of 3 Pages",
                        previousPage: {page: 2, limit: 2},
                        result: [
                        {
                            id: 24, trip_id: 22, user_id: 1, line_manager_id: 2, status: "accepted", tripRequest:[
                                {id: 22, user_id: 1, origin: "Kigali", destination: "Kampala", dateOfTravel: "2020-10-20",travelReason: "Visiting",type: "one-way-trip"}
                            ]
                        },
                        {
                            id: 23, trip_id: 21, user_id: 1, line_manager_id: 2, status: "accepted", tripRequest:[
                                { id: 21, user_id: 1, origin: "Kigali", destination: "Kampala", dateOfTravel: "2020-10-20",travelReason: "Visiting",type: "one-way-trip" }
                            ]
                        },
                        ]
                        },
                    message: 'All The Trips are:  ',
                    status: 200,
                }, 
                status: 200, 
                statusText: 'OK',
                },
            error: null,
        }, 
    });
    
    const wrapper = mount( 
        <Provider store={ store }> 
            <MemoryRouter initialEntries={['/viewtrips/accepted']}>
                    <TripRequestsLayout />
            </MemoryRouter>
        </Provider>
    );
    
    const nextPageMock= jest.spyOn(wrapper.find('[id="nextPage"]').props(), 'onClick');
    
    wrapper.find('[id="nextPage"]').props().onClick(); 
        
    expect(nextPageMock).toHaveBeenCalled();
});

it('Should test FILTERS change to pending', ()=>{    
        const onClickMock= jest.spyOn(wrapper.find('[id="pending"]').at(0).props(), 'onClick');    
        wrapper.find('[id="pending"]').at(0).props().onClick({target: {id:'pending'}});        
        expect(onClickMock).toHaveBeenCalled();
});

it('Should test FILTERS change to Rejected', ()=>{
        const onClickMock= jest.spyOn(wrapper.find('[id="rejected"]').at(0).props(), 'onClick');
        wrapper.find('[id="rejected"]').at(0).props().onClick({target: {id:'rejected'}});
        expect(onClickMock).toHaveBeenCalled();
});

it('Should test FILTERS change with activeFilter', ()=>{ 
        const onClickMock= jest.spyOn(wrapper.find('[id="activeFilter"]').props(), 'onClick');
        wrapper.find('[id="activeFilter"]').props().onClick({target: {id:'activeFilter'}});
        expect(onClickMock).toHaveBeenCalled();
});


it('Should test FILTERS change to pending But nothing to work', ()=>{    
    window.location = { pathname: '/viewtrips/xxxx' }; 
    const wrapper = mount( 
        <Provider store={ store }> 
            <MemoryRouter initialEntries={['/viewtrips/xxx']}>
                    <TripRequestsLayout />
            </MemoryRouter>
        </Provider>
    );      
    
    const onClickMock= jest.spyOn(wrapper.find('[id="pending"]').at(0).props(), 'onClick');    
    wrapper.find('[id="pending"]').at(0).props().onClick({target: {id:'pending'}});        
    expect(onClickMock).toHaveBeenCalled();
});


});
