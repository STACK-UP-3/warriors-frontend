import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import M from 'materialize-css'; // Materialize JS ~ https://www.youtube.com/watch?v=EboLM8OjlP4
// file imports
import { initialState } from './state';
import Dashboard from '../../../containers/layouts/Dashboard';
import PageIntro from '../../../containers/blocks/Intro';
import RoleCollection from '../RoleCollection';
import CreateRoleModal from '../CreateRoleModal';
import EditRoleModal from '../EditRoleModal';
import DeleteRoleModal from '../DeleteRoleModal';
import {
  readRoleCollection,
  createRole,
  updateRole,
  deleteRole,
  openEditRoleModal,
  openModalDeleteRole,
} from '../../../services/roleResourceService';

export class RolesPage extends Component {
  constructor(props) {
    super(props);
    // define internal state
    this.state = initialState;
  }

  async componentDidMount() {
    // Initialise modal UI from Materialize CSS

    /* istanbul ignore next */
    var elems = document.querySelectorAll('.modal');
    /* istanbul ignore next */
    M.Modal.init(elems, {});

    // Show loading spinner
    this.setState({ loading: true });
    // dispatch GET request to read Role collection from API server
    const result = await this.props.dispatchReadRoleCollection();
    // redirect to Login page on expired token
    if (result.status !== 200) window.location.replace('/login');
    // Hide loading spinner
    this.setState({ loading: false });
  }

  render() {
    return (
      <div
        className="page-container"
        data-test="component--page--roles-settings"
      >
        <Dashboard>
          <PageIntro title={'User Roles and Permissions'}>
            <a
              href="#modalCreateRole"
              className="waves-effect waves-light btn modal-trigger"
            >
              Add New Role
            </a>
          </PageIntro>

          <RoleCollection
            arrRoles={this.props.stateRoles.roles}
            loading={this.state.loading}
            fnOpenEditRoleModal={this.props.dispatchOpenEditRoleModal}
            fnOpenModalDeleteRole={this.props.dispatchOpenModalDeleteRole}
          />
        </Dashboard>

        {/* ------------------------------------------------------------- */}

        {/* Page Modals */}
        <CreateRoleModal fnCreateRole={this.props.dispatchCreateRole} />
        <EditRoleModal
          roleId={this.props.roleUpdateId}
          roleName={
            this.props.roleToBeUpdated ? this.props.roleToBeUpdated.name : null
          }
          fnUpdateRole={this.props.dispatchUpdateRole}
        />
        <DeleteRoleModal
          roleId={this.props.roleDeleteId}
          roleName={
            this.props.roleToBeDeleted ? this.props.roleToBeDeleted.name : null
          }
          fnDeleteRole={this.props.dispatchDeleteRole}
        />
        {/* end: Page Modals */}
      </div>
    );
  }
}

RolesPage.propTypes = {
  stateRoles: PropTypes.object.isRequired,
  roleUpdateId: PropTypes.number,
  dispatchReadRoleCollection: PropTypes.func.isRequired,
  dispatchDeleteRole: PropTypes.func.isRequired,
};

// Hook up state from global state (kept in the Redux store) to be used in this component,
// and passed down to child components
const mapStateToProps = (state) => {
  return {
    stateRoles: state.roleReducer,
    roleUpdateId: state.roleReducer.updateId,
    roleToBeUpdated: state.roleReducer.roles.find(
      (item) => item.id === state.roleReducer.updateId,
    ),
    roleDeleteId: state.roleReducer.deleteId,
    roleToBeDeleted: state.roleReducer.roles.find(
      (item) => item.id === state.roleReducer.deleteId,
    ),
  };
};

// Hook up dispatch actions to be used in this component,
// and passed down to child components
export const mapDispatchToProps = (dispatch) => {
  return {
    dispatchReadRoleCollection: () => dispatch(readRoleCollection()),
    dispatchCreateRole: (data) => dispatch(createRole(data)),
    dispatchUpdateRole: (id, data) => dispatch(updateRole(id, data)),
    dispatchDeleteRole: (id) => dispatch(deleteRole(id)),
    dispatchOpenEditRoleModal: (id) => dispatch(openEditRoleModal(id)),
    dispatchOpenModalDeleteRole: (id) => dispatch(openModalDeleteRole(id)),
  };
};

// Give this Component access to Redux (store, state and actions)
export default connect(mapStateToProps, mapDispatchToProps)(RolesPage);
