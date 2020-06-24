import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();
import React from 'react';
import { shallow } from 'enzyme';
// import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
// import { MemoryRouter } from 'react-router-dom'; // ~https://reacttraining.com/react-router/web/guides/testing
import thunk from 'redux-thunk'; // Testing async actions ~https://stackoverflow.com/q/53509387/2661028
// Utils
import { findNodeByTestAttr } from '../../../utils/findNodeByTestAttr';
// Components to be tested
import RolesPage from './index';
import { mapStateToProps, mapDispatchToProps } from './index';
import { testRoles } from '../../../tests/fixtures/roles.example';

// Initialise mock store, with middleware
const mockStore = configureStore([thunk]);

describe('>>> Testing the Roles Page component, connected to Redux', () => {
  let store;
  let component;

  beforeEach(() => {
    fetch.resetMocks();

    // Pass initial state into mock store
    store = mockStore({
      roleReducer: {
        roles: [
          { id: 1, name: 'Super Administrator', permissions: 'create-user' },
        ],
        updateId: 1,
        deleteId: 1,
        loading: false,
        errors: null,
      },
    });

    // setup props
    const props = {
      dispatchCreateRole: jest.fn(),
    };

    // // Render the component, with mock store connected
    // component = mount(
    //   <Provider store={store}>
    //     <MemoryRouter>
    //       <RolesPage />
    //     </MemoryRouter>
    //   </Provider>,
    // );

    // render the component, with mock store connected ~https://youtu.be/92F8_9UG04g
    component = shallow(<RolesPage store={store} {...props} />)
      .childAt(0)
      .dive();
  });

  // it('should display the Dashboard layout', () => {
  //   // Find specific elements rendered in the component
  //   const layoutDashboard = component.find(Dashboard);
  //   // const layoutSidebar = wrapper.find(Sidebar);
  //   // const layoutFooter = wrapper.find(Footer);

  //   // Declare assertions
  //   expect(layoutDashboard.exists()).toBe(true);
  //   // expect(layoutSidebar.exists()).toBe(true);
  //   // expect(layoutFooter.exists()).toBe(true);
  // });

  /**
   * Tests
   */

  it('should successfully render the component with given state', () => {
    const wrapper = findNodeByTestAttr(
      component,
      'component--page--roles-settings',
    );
    expect(wrapper.length).toBe(1);
    expect(component.state().loading).toBe(true);
  });

  it('should successfully GET Roles collection from API server on componentDidMount()', async () => {
    // mock the HTTP response
    fetch.mockResponseOnce(
      JSON.stringify({
        status: 200,
        message: 'Roles retrieved successfully',
        data: testRoles,
      }),
    );
    // create Component class instance
    const instance = component.instance();
    // call class instance methods explicitly
    await instance.componentDidMount();
    // expect(instance.randomFunction).toHaveBeenCalledTimes(1); // You check if the condition you want to match is correct.
    expect(component.state().loading).toBe(false);
  });

  it('should successfully call dispatch prop: dispatchCreateRole', async () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).dispatchCreateRole();

    // console.log(component.prop('dispatchCreateRole'));

    // const instance = component.instance();
    // // jest.spyOn(instance, 'randomFunction'); // You spy on the randomFunction
    // await instance.componentDidMount();
    // // expect(instance.randomFunction).toHaveBeenCalledTimes(1); // You check if the condition you want to match is correct.
    // expect(component.state().loading).toBe(false);
  });

  it('should successfully call dispatch prop: dispatchUpdateRole', async () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).dispatchUpdateRole();
  });

  it('should successfully call dispatch prop: dispatchDeleteRole', async () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).dispatchDeleteRole();
  });

  it('should successfully call dispatch prop: dispatchOpenEditRoleModal', async () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).dispatchOpenEditRoleModal();
  });

  it('should successfully call dispatch prop: dispatchOpenModalDeleteRole', async () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).dispatchOpenModalDeleteRole();
  });
});
