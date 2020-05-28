import React from 'react';
import { shallow } from 'enzyme';
// file imports
import { findNodeByTestAttr } from '../../../utils/findNodeByTestAttr';
import { checkProps } from '../../../utils/checkProps';
import { formOnChangeRoleInput } from '../../../handlers/events/roles/formInputOnChange';
// components to be tested
import CreateRoleModal from './index';

const initialise = (props = {}) => {
  const component = shallow(<CreateRoleModal {...props} />);
  return component;
};

const testEventOnChangeInputPermissions = (event, context) => {
  // run event handler
  formOnChangeRoleInput(event, context);

  // check current state
  const updatedState = context.state.inputPermissions.filter(
    (item, index) => item.value === event.target.value,
  );

  return updatedState;
};

describe('>>> Testing the Create Role modal component', () => {
  let component;
  let fnMock;

  /**
   * Prop Types
   */
  describe('Validate component PropTypes', () => {
    it('should accept valid props', () => {
      const validProps = { fnCreateRole: jest.fn() };

      const propsErr = checkProps(CreateRoleModal, validProps);

      expect(propsErr).toBeUndefined();
    });
  });

  /**
   * Structure & Layout
   */
  describe('Validate component Rendering', () => {
    beforeEach(() => {
      component = initialise({ fnCreateRole: () => jest.fn() });
    });

    it('should successfully render the component in the DOM', () => {
      const wrapper = findNodeByTestAttr(
        component,
        'component--modal--create-role',
      );
      expect(wrapper.length).toBe(1);
    });
  });

  /**
   * Events
   */
  describe('Validate component Events', () => {
    beforeEach(() => {
      fnMock = jest.fn();
      component = initialise({ fnCreateRole: () => fnMock });
    });

    it('should successfully reset state on click event for Reset button', () => {
      // create an instance of the component class
      const context = component.instance();
      // execute method being tested
      context.reset();
      // check if state is reset to initial values
      expect(context.state.roleName).toBe('');
    });

    it('should successfully call a function on change event for "role name" input', () => {
      const input = findNodeByTestAttr(component, 'input--role-name');

      input.simulate('change', {
        target: { name: 'role-name', value: 'Changed role name' },
      });

      // ... missing assertion? (for testing that a function was called)
    });

    it('should successfully update state on change event for "role name" input', () => {
      const context = component.instance();

      context.handleOnChange({
        target: { name: 'role-name', value: 'Changed role name' },
      });

      expect(context.state.roleName).toBe('Changed role name');
    });

    it('should successfully update state on change event for "permissions" form input', () => {
      let updatedStateDiff;

      updatedStateDiff = testEventOnChangeInputPermissions(
        {
          target: { name: 'chk-create-trip', value: 'create-trip' },
        },
        component.instance(),
      );

      expect(updatedStateDiff[0].checked).toBe(false);

      /**
       * ---
       */

      updatedStateDiff = testEventOnChangeInputPermissions(
        {
          target: { name: 'chk-edit-trip', value: 'edit-trip' },
        },
        component.instance(),
      );

      expect(updatedStateDiff[0].checked).toBe(true);

      /**
       * ---
       */

      updatedStateDiff = testEventOnChangeInputPermissions(
        {
          target: { name: 'chk-accept-trip', value: 'accept-trip' },
        },
        component.instance(),
      );

      expect(updatedStateDiff[0].checked).toBe(true);

      /**
       * ---
       */

      updatedStateDiff = testEventOnChangeInputPermissions(
        {
          target: { name: 'chk-reject-trip', value: 'reject-trip' },
        },
        component.instance(),
      );

      expect(updatedStateDiff[0].checked).toBe(true);

      /**
       * ---
       */

      updatedStateDiff = testEventOnChangeInputPermissions(
        {
          target: {
            name: 'chk-create-accommodation',
            value: 'create-accommodation',
          },
        },
        component.instance(),
      );

      expect(updatedStateDiff[0].checked).toBe(true);

      /**
       * ---
       */

      updatedStateDiff = testEventOnChangeInputPermissions(
        {
          target: {
            name: 'chk-edit-accommodation',
            value: 'edit-accommodation',
          },
        },
        component.instance(),
      );

      expect(updatedStateDiff[0].checked).toBe(true);
    });

    it('should successfully do nothing on change event for missing form input', () => {
      const event = {
        target: { name: 'random-event-target', value: 'Random Event Value' },
      };

      // create an instance of the component class
      const context = component.instance();

      // run event handler
      formOnChangeRoleInput(event, context);

      expect(context.state.roleName).toBe('');
    });

    it('should successfully call a function on submit event', () => {
      const form = findNodeByTestAttr(component, 'form--create-role');

      form.simulate('submit', {
        preventDefault: () => {},
      });

      // ... missing assertion? (for testing that a function was called)
    });

    it('should successfully execute handler on submit event', async () => {
      expect.assertions(1); // required

      const context = component.instance();
      const event = {
        preventDefault: () => {},
        target: {
          name: 'chk-edit-accommodation',
          value: 'edit-accommodation',
        },
      };

      try {
        await context.handleSubmit(event); // execute event handler (async)

        expect(context.state.loading).toBe(false);
      } catch (error) {
        expect(context.state.loading).toBe(true);
      }
    });
  });
});
