import React from 'react';
import { shallow } from 'enzyme';
// Components to be tested
import RoleCollection from './index';
import RoleCard from '../RoleCard';
import LinearSpinner from '../../_utilities/LinearSpinner';

describe('>>> Testing the Role Collection component', () => {
  it('should display existing Roles in the Role card UI', () => {
    const wrapper = shallow(
      <RoleCollection
        arrRoles={[
          {
            id: 1,
            name: 'Super Administrator',
            permissions: 'create-user, delete-user',
          },
          {
            id: 2,
            name: 'Travel Administrator',
            permissions: 'create-accommodation, delete-accommodation',
          },
        ]}
      />,
    );

    const card = wrapper.find(RoleCard);

    expect(card.exists()).toBe(true);
  });

  it('should display an empty message if no Roles exist', () => {
    const wrapper = shallow(<RoleCollection arrRoles={[]} />);

    const message = wrapper.find('p');

    expect(message.text()).toBe('There are no roles yet in your collection');
  });

  it('should successfully display a Progress Spinner while loading', () => {
    const wrapper = shallow(<RoleCollection arrRoles={[]} loading={true} />);
    const spinner = wrapper.find(LinearSpinner);
    expect(spinner.exists()).toBe(true);
  });
});
