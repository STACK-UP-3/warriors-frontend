import * as httpRequest from '../helpers/httpRequest';

import {
  actionSetRoleCreated,
  actionSetRoleCollectionRetrieved,
  actionSetRoleRetrieved,
  actionSetRoleUpdated,
  actionSetRoleDeleted,
  actionSetRoleEditModalOpened,
  actionSetRoleDeleteModalOpened,
} from '../redux/actions/roles';

const url = 'https://warriorz-staging.herokuapp.com/api/v1/roles'; // Set URL for API server
const token = localStorage.getItem('token'); // Get authentication token from browser local storage

export const createRole = (data) => {
  return async (dispatch) => {
    // Get response data from asynchronous HTTP request
    const result = await httpRequest.postResource(url, data, token);
    // Dispatch the action to the Redux reducers
    dispatch(actionSetRoleCreated(result.data));
  };
};

export const readRoleCollection = () => {
  return async (dispatch) => {
    // Get response data from asynchronous HTTP request
    const result = await httpRequest.getResource(url, token);
    // Check for error API response
    if (result.status === 404) return result;
    // Dispatch the action to the Redux reducers
    dispatch(actionSetRoleCollectionRetrieved(result.data));

    return result;
  };
};

export const readRole = (id) => {
  return async (dispatch) => {
    // Get response data from asynchronous HTTP request
    const result = await httpRequest.getResource(`${url}/${id}`, token);
    // Dispatch the action to the Redux reducers
    dispatch(actionSetRoleRetrieved(result.data));
  };
};

export const updateRole = (id, data) => {
  return async (dispatch) => {
    // Get response data from asynchronous HTTP request
    const result = await httpRequest.patchResource(`${url}/${id}`, data, token);
    // Dispatch the action to the Redux reducers
    dispatch(actionSetRoleUpdated(id, data));
  };
};

export const deleteRole = (id) => {
  return async (dispatch) => {
    // Get response data from asynchronous HTTP request
    const result = await httpRequest.deleteResource(`${url}/${id}`, token);
    // Dispatch the action to the Redux reducers
    dispatch(actionSetRoleDeleted(id));
  };
};

/**
 * ---
 */

export const openEditRoleModal = (id) => {
  return (dispatch) => {
    // Dispatch the action to the Redux reducers
    dispatch(actionSetRoleEditModalOpened(id));
  };
};

export const openModalDeleteRole = (id) => {
  return (dispatch) => {
    dispatch(actionSetRoleDeleteModalOpened(id));
  };
};
