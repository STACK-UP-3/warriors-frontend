import React from 'react';
import { shallow } from 'enzyme';
import M from 'materialize-css'; // Materialize JS
// file imports
import { findNodeByTestAttr } from '../../../utils/findNodeByTestAttr';
import { checkProps } from '../../../utils/checkProps';
// components to be tested
import DeleteRoleModal from './index';

// setup component with props
const initialise = (props = {}) => {
  const component = shallow(<DeleteRoleModal {...props} />);
  return component;
};

describe('>>> Testing the Delete Role Modal component', () => {
  /**
   * Prop Types
   */
  describe('Validate component PropTypes', () => {
    it('should accept valid props', () => {
      const validProps = {
        roleId: 1,
        roleName: 'Example Role',
        fnDeleteRole: jest.fn(),
      };

      const propsErr = checkProps(DeleteRoleModal, validProps);

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
        roleName: 'Example Role',
        fnDeleteRole: () => null,
      });
    });

    /**
     * Tests
     */

    it('should render the component successfully', () => {
      const wrapper = findNodeByTestAttr(
        component,
        'component--modal--delete-role',
      );
      expect(wrapper.length).toBe(1);
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
        roleName: 'Example Role',
        fnDeleteRole: fnMock,
      });
    });

    it('should successfully call a function on click event of "confirm" button', async () => {
      const button = findNodeByTestAttr(
        component,
        'button--confirm-delete-role',
      );

      button.simulate('click');

      expect(component.state('loading')).toBe(false);

      // ... missing assertion? (for testing that a function was called)
    });

    // it('should successfully execute handler on click event of "confirm" button', async () => {
    //   expect.assertions(1); // required
    //   // M.prototype.Modal = jest.fn();

    //   const context = component.instance(); // create an instance of the component class
    //   const event = { preventDefault: () => {} };

    //   await context.handleConfirm(event); // execute handler

    //   expect(context.state.loading).toBe(false);
    // });
  });
});
