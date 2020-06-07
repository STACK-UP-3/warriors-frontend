import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import Pagination from '../../components/pagination';
import configureStore from '../../redux/configureStore';

describe('*************** Testing the Pagination  component ***************',()=>{
    const store = configureStore();

    it('Should render the Pagination page correctly', ()=>{
        const wrapper = mount( 
            <Provider store={ store }> 
                <Pagination 
                    previousPage={jest.fn()} 
                    nextPage={jest.fn()} 
                    prevPage={1} 
                    page={ 2 } 
                    numberOfPages={3} 
                    pages={[1,2,3]}
                 /> 
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
