import { roleReducer } from '../../../redux/reducers/roleReducer';
import {
  SET_ROLE_CREATED,
  SET_ROLE_COLLECTION_RETRIEVED,
  SET_ROLE_RETRIEVED,
  SET_ROLE_UPDATED,
  SET_ROLE_DELETED,
  SET_ROLE_EDIT_MODAL_OPENED,
  SET_ROLE_DELETE_MODAL_OPENED,
} from '../../../redux/actions/roles/types';

// Set initial reducer state
let initialState = {};

describe('>>> Testing the Role reducer', () => {
  beforeEach(() => {
    initialState = {
      roles: [
        {
          id: 1,
          name: 'Example Role',
          permissions: 'example-permission',
        },
        {
          id: 2,
          name: 'Sample Role',
          permissions: 'sample-permission',
        },
      ],
      updateId: null,
      deleteId: null,
      loading: false,
      errors: null,
    };
  });

  /**
   * Tests
   */

  it('should return default state on empty action', () => {
    const state = roleReducer();
    expect(state).toEqual({
      roles: [],
      updateId: 0,
      deleteId: 0,
      loading: false,
      errors: null,
    });
  });

  it('should verify new state on action SET_ROLE_CREATED', () => {
    const action = {
      type: SET_ROLE_CREATED,
      payload: {
        id: 3,
        name: 'Test Role',
        permissions: 'test-permission',
      },
    };
    const newState = roleReducer(initialState, action);
    expect(newState).toEqual({
      ...initialState,
      roles: [...initialState.roles, action.payload],
    });
  });

  it('should verify new state on action SET_ROLE_COLLECTION_RETRIEVED', () => {
    const action = {
      type: SET_ROLE_COLLECTION_RETRIEVED,
      payload: [
        {
          id: 3,
          name: 'Test Role',
          permissions: 'test-permission',
        },
        {
          id: 4,
          name: 'Random Role',
          permissions: 'random-permission',
        },
      ],
    };
    const newState = roleReducer(initialState, action);
    expect(newState).toEqual({ ...initialState, roles: action.payload });
  });

  it('should verify new state on action SET_ROLE_RETRIEVED', () => {
    const action = {
      type: SET_ROLE_RETRIEVED,
      payload: {
        id: 3,
        name: 'Test Role',
        permissions: 'test-permission',
      },
    };
    const newState = roleReducer(initialState, action);
    expect(newState).toEqual({
      ...initialState,
      roles: [...initialState.roles, action.payload],
    });
  });

  it('should verify new state on action SET_ROLE_UPDATED', () => {
    const action = {
      type: SET_ROLE_UPDATED,
      payload: {
        id: 2,
        name: 'Sample Role Updated',
        permissions: 'sample-permission',
      },
    };
    const newState = roleReducer(initialState, action);
    expect(newState).toEqual({
      ...initialState,
      roles: initialState.roles.map((item) => {
        if (item.id === action.payload.id) return action.payload;
        return item;
      }),
    });
  });

  it('should verify new state on action SET_ROLE_DELETED', () => {
    const action = {
      type: SET_ROLE_DELETED,
      payload: {
        id: 2,
        name: 'Sample Role',
        permissions: 'sample-permission',
      },
    };
    const newState = roleReducer(initialState, action);
    expect(newState).toEqual({
      ...initialState,
      roles: initialState.roles.filter((item) => item.id !== action.payload),
    });
  });

  it('should verify new state on action SET_ROLE_EDIT_MODAL_OPENED', () => {
    const action = {
      type: SET_ROLE_EDIT_MODAL_OPENED,
      payload: 2,
    };
    const newState = roleReducer(initialState, action);
    expect(newState).toEqual({ ...initialState, updateId: action.payload });
  });

  it('should verify new state on action SET_ROLE_DELETE_MODAL_OPENED', () => {
    const action = {
      type: SET_ROLE_DELETE_MODAL_OPENED,
      payload: 2,
    };
    const newState = roleReducer(initialState, action);
    expect(newState).toEqual({ ...initialState, deleteId: action.payload });
  });
});

// ~https://youtu.be/UOGxfvNwv-8
