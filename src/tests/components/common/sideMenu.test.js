import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import Sidemenu from '../../../components/common/sideMenu';
import configureStore from '../../../redux/configureStore';
import { MemoryRouter } from 'react-router-dom';

const store = configureStore();

describe('*************** Testing the SideMenu component ***************',()=>{
    let wrapper;
    const { location } = window;

    beforeEach(()=>{
        delete window.location;
		window.location = { pathname:'/dashboard' };
        
        wrapper = mount( 
            <Provider store={ store }> 
                <MemoryRouter initialEntries={['/dashboard']}>
                    <Sidemenu />
                </MemoryRouter>
            </Provider>
        );
        
    });

    afterAll(() => {
		window.location = location;
    });

    it('Should render the dashboard component correctly', ()=>{
        expect(wrapper).toMatchSnapshot();
    });
    
    it('Should render the Trip request component correctly', ()=>{
        window.location = { pathname:'/trips/oneway' };
        
        const wrapper = mount( 
            <Provider store={ store }> 
                <MemoryRouter initialEntries={['/trips/oneway']}>
                    <Sidemenu />
                </MemoryRouter>
            </Provider>
        );
        
        expect(wrapper).toMatchSnapshot();
    });
});
