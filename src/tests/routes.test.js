import React from 'react';  
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import App from '../App';

describe('app component', () => {
	test('it should render the Home component', () => {
		const component = mount(
				<MemoryRouter initialEntries={['/']}>
					{ App }
				</MemoryRouter>
		);
		expect(component).toHaveLength(1);
	});
});
