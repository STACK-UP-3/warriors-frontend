import React from 'react';
import { shallow } from 'enzyme';
// Utils
import { checkProps } from '../../../utils/checkProps';
import { findNodeByTestAttr } from '../../../utils/findNodeByTestAttr';
// Components to be tested
import RoleCard from './index';

const initialise = (props = {}) => {
  const component = shallow(<RoleCard {...props} />);
  return component;
};

describe('>>> Testing the Role Card component', () => {
  /**
   * Prop Types ~https://youtu.be/JQD-ApooNMI
   */
  describe('Validate component PropTypes', () => {
    // Test valid prop types
    it('should not throw a warning', () => {
      const expectedProps = {
        roleId: 1,
        roleName: 'Example Role',
        rolePermissions: 'example-permission',
      };

      const propsErr = checkProps(RoleCard, expectedProps);

      expect(propsErr).toBeUndefined();
    });
  });

  /**
   * Structure & Layout
   */
  describe('Validate component Rendering', () => {
    let component;

    beforeEach(() => {
      component = initialise({
        roleId: 1,
        roleName: 'Role Name',
        rolePermissions: 'example-permission',
      });
    });

    it('should render the component successfully', () => {
      const wrapper = findNodeByTestAttr(
        component,
        'component--card--role-record',
      );
      expect(wrapper.length).toBe(1);
    });

    it('should not render card actions when Role is Super Administrator', () => {
      // Overwrite the component initialisation
      component = initialise({
        roleId: 1,
        roleName: 'Super Administrator',
        rolePermissions: 'super-permission',
      });

      const actionZone = findNodeByTestAttr(component, 'action-buttons');
      expect(actionZone.length).toBe(0);
    });
  });

  /**
   * Events
   */
  describe('Validate component Events', () => {
    let component;
    let fnMock;

    beforeEach(() => {
      fnMock = jest.fn();

      component = initialise({
        roleId: 1,
        roleName: 'Role Name',
        rolePermissions: 'example-permission',
        fnOpenModelEdit: fnMock,
        fnOpenModalDelete: fnMock,
      });
    });

    it('should successfully call a function on click event for Edit button', () => {
      const buttonEdit = findNodeByTestAttr(component, 'edit-action-button');

      buttonEdit.simulate('click');

      const callback = fnMock.mock.calls.length;

      expect(callback).toBe(1);
    });

    it('should successfully call a function on click event for Delete button', () => {
      const buttonDelete = findNodeByTestAttr(
        component,
        'delete-action-button',
      );

      buttonDelete.simulate('click');

      const callback = fnMock.mock.calls.length;

      expect(callback).toBe(1);
    });
  });
});
