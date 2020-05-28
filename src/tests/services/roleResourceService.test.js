import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();
// ~https://www.reactnativeschool.com/mocking-fetch-api-calls-when-using-jest

// Local files
import * as roleResourceService from '../../services/roleResourceService';
import * as actionTypes from '../../redux/actions/roles/types';

const mockStore = configureStore([thunk]);

describe('Testing the Role resource service', () => {
  let store;

  beforeEach(() => {
    // Pass initial state into mock store
    store = mockStore({
      roleReducer: {
        roles: [],
        updateId: null,
        deleteId: null,
        loading: false,
        errors: null,
      },
    });
    // Reset
    fetch.resetMocks();
  });

  // ~https://redux.js.org/recipes/writing-tests#async-action-creators
  it('should successfully dispatch action SET_ROLE_CREATED', () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        id: 1,
        name: 'Example Role',
        permissions: 'example-permission',
      }),
    );

    store
      .dispatch(
        roleResourceService.createRole({
          name: 'Example Role',
          permissions: 'example-permission',
        }),
      )
      .then(() => {
        const expectedActions = [
          {
            type: actionTypes.SET_ROLE_CREATED,
            payload: {
              id: 1,
              name: 'Example Role',
              permissions: 'example-permission',
            },
          },
        ];

        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('should successfully dispatch action SET_ROLE_COLLECTION_RETRIEVED', () => {
    fetch.mockResponseOnce(
      JSON.stringify([
        {
          id: 1,
          name: 'Example Role',
          permissions: 'example-permission',
        },
      ]),
    );

    store.dispatch(roleResourceService.readRoleCollection()).then(() => {
      const expectedActions = [
        {
          type: actionTypes.SET_ROLE_COLLECTION_RETRIEVED,
          payload: [
            {
              id: 1,
              name: 'Example Role',
              permissions: 'example-permission',
            },
          ],
        },
      ];

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should successfully dispatch action SET_ROLE_RETRIEVED', () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        id: 1,
        name: 'Example Role',
        permissions: 'example-permission',
      }),
    );

    store.dispatch(roleResourceService.readRole(1)).then(() => {
      const expectedActions = [
        {
          type: actionTypes.SET_ROLE_RETRIEVED,
          payload: {
            id: 1,
            name: 'Example Role',
            permissions: 'example-permission',
          },
        },
      ];

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should successfully dispatch action SET_ROLE_UPDATED', () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        id: 1,
        name: 'Updated Role',
        permissions: 'example-permission',
      }),
    );

    store
      .dispatch(roleResourceService.updateRole(1, { name: 'Updated Role' }))
      .then(() => {
        const expectedActions = [
          {
            type: actionTypes.SET_ROLE_UPDATED,
            payload: { id: 1, data: { name: 'Updated Role' } },
          },
        ];

        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('should successfully dispatch action SET_ROLE_DELETED', () => {
    fetch.mockResponseOnce(JSON.stringify({}));

    store.dispatch(roleResourceService.deleteRole(1)).then(() => {
      const expectedActions = [
        {
          type: actionTypes.SET_ROLE_DELETED,
          payload: 1,
        },
      ];

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  /**
   * ---
   */

  it('should successfully dispatch action SET_ROLE_EDIT_MODAL_OPENED', () => {
    store.dispatch(roleResourceService.openEditRoleModal(1));

    const expectedActions = [
      {
        type: actionTypes.SET_ROLE_EDIT_MODAL_OPENED,
        payload: 1,
      },
    ];

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should successfully dispatch action SET_ROLE_DELETE_MODAL_OPENED', () => {
    store.dispatch(roleResourceService.openModalDeleteRole(1));

    const expectedActions = [
      {
        type: actionTypes.SET_ROLE_DELETE_MODAL_OPENED,
        payload: 1,
      },
    ];

    expect(store.getActions()).toEqual(expectedActions);
  });
});
