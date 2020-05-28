import {
  SET_ROLE_CREATED,
  SET_ROLE_COLLECTION_RETRIEVED,
  SET_ROLE_RETRIEVED,
  SET_ROLE_UPDATED,
  SET_ROLE_DELETED,
  SET_ROLE_EDIT_MODAL_OPENED,
  SET_ROLE_DELETE_MODAL_OPENED,
} from '../actions/roles/types';

// Define initial state
const initState = {
  roles: [],
  updateId: 0,
  deleteId: 0,
  loading: false,
  errors: null,
};

/**
 * Reducer for the Role resource.
 * Determines which action occurred, and updates state accordingly.
 *
 * @param {*} state Current state of the resource in the store
 * @param {object} action Dispatched action
 */
export const roleReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case SET_ROLE_CREATED:
      state = { ...state, roles: [...state.roles, action.payload] };
      break;

    case SET_ROLE_COLLECTION_RETRIEVED:
      state = { ...state, roles: action.payload };
      break;

    case SET_ROLE_RETRIEVED:
      state = { ...state, roles: [...state.roles, action.payload] };
      break;

    case SET_ROLE_UPDATED:
      state = {
        ...state,
        roles: state.roles.map((item) => {
          if (item.id === action.payload.id) return action.payload;
          return item;
        }),
      };
      break;

    case SET_ROLE_DELETED:
      // Remove deleted item from current state
      state = {
        ...state,
        roles: state.roles.filter((item) => item.id !== action.payload),
      };
      break;

    case SET_ROLE_EDIT_MODAL_OPENED:
      state = {
        ...state,
        updateId: action.payload,
      };
      break;

    case SET_ROLE_DELETE_MODAL_OPENED:
      state = {
        ...state,
        deleteId: action.payload,
      };
      break;

    default:
      // do nothing: no state changes
      break;
  }

  // reducer must return modified state to the store
  return state;
};
