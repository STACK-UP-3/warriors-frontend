import * as actionTypes from './types';

/**
 * Set state when a new Role is created in the database
 * @param {Object} role The created Role
 */
export const actionSetRoleCreated = (role) => {
  return {
    type: actionTypes.SET_ROLE_CREATED,
    payload: role,
  };
};

export const actionSetRoleCollectionRetrieved = (roles) => {
  return {
    type: actionTypes.SET_ROLE_COLLECTION_RETRIEVED,
    payload: roles,
  };
};

export const actionSetRoleRetrieved = (role) => {
  return {
    type: actionTypes.SET_ROLE_RETRIEVED,
    payload: role,
  };
};

export const actionSetRoleUpdated = (id, data) => {
  return {
    type: actionTypes.SET_ROLE_UPDATED,
    payload: { id: id, name: data.name },
  };
};

export const actionSetRoleDeleted = (id) => {
  return {
    type: actionTypes.SET_ROLE_DELETED,
    payload: id,
  };
};

/**
 * ---
 */

export const actionSetRoleEditModalOpened = (id) => {
  return {
    type: actionTypes.SET_ROLE_EDIT_MODAL_OPENED,
    payload: id,
  };
};

export const actionSetRoleDeleteModalOpened = (id) => {
  return {
    type: actionTypes.SET_ROLE_DELETE_MODAL_OPENED,
    payload: id,
  };
};
