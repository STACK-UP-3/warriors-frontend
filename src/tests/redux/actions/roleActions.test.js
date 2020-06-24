import {
  SET_ROLE_CREATED,
  SET_ROLE_COLLECTION_RETRIEVED,
  SET_ROLE_RETRIEVED,
  SET_ROLE_UPDATED,
  SET_ROLE_DELETED,
  SET_ROLE_EDIT_MODAL_OPENED,
  SET_ROLE_DELETE_MODAL_OPENED,
} from '../../../redux/actions/roles/types';

import {
  actionSetRoleCreated,
  actionSetRoleCollectionRetrieved,
  actionSetRoleRetrieved,
  actionSetRoleUpdated,
  actionSetRoleDeleted,
  actionSetRoleEditModalOpened,
  actionSetRoleDeleteModalOpened,
} from '../../../redux/actions/roles';

describe('>>> Testing the Role actions', () => {
  let role;
  beforeEach(() => {
    role = {
      id: 1,
      name: 'Example Role',
      permissions: 'example-permissions',
    };
  });

  it('Should verify the action SET_ROLE_CREATED', () => {
    const action = actionSetRoleCreated(role);

    expect(action).toEqual({
      type: SET_ROLE_CREATED,
      payload: role,
    });
  });

  it('Should verify the action SET_ROLE_COLLECTION_RETRIEVED', () => {
    const action = actionSetRoleCollectionRetrieved(role);

    expect(action).toEqual({
      type: SET_ROLE_COLLECTION_RETRIEVED,
      payload: role,
    });
  });

  it('Should verify the action SET_ROLE_RETRIEVED', () => {
    const action = actionSetRoleRetrieved(role);

    expect(action).toEqual({
      type: SET_ROLE_RETRIEVED,
      payload: role,
    });
  });

  it('Should verify the action SET_ROLE_UPDATED', () => {
    const action = actionSetRoleUpdated(role.id, { name: 'Sample Role' });

    expect(action).toEqual({
      type: SET_ROLE_UPDATED,
      payload: { id: role.id, name: 'Sample Role' },
    });
  });

  it('Should verify the action SET_ROLE_DELETED', () => {
    const action = actionSetRoleDeleted(role.id);

    expect(action).toEqual({
      type: SET_ROLE_DELETED,
      payload: role.id,
    });
  });

  it('Should verify the action SET_ROLE_EDIT_MODAL_OPENED', () => {
    const action = actionSetRoleEditModalOpened(role.id);

    expect(action).toEqual({
      type: SET_ROLE_EDIT_MODAL_OPENED,
      payload: role.id,
    });
  });

  it('Should verify the action SET_ROLE_EDIT_MODAL_OPENED', () => {
    const action = actionSetRoleDeleteModalOpened(role.id);

    expect(action).toEqual({
      type: SET_ROLE_DELETE_MODAL_OPENED,
      payload: role.id,
    });
  });
});
