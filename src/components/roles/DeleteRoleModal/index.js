import React, { Component } from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css'; // Materialize JS
// file imports
import { initialState } from './state';
import CircularSpinner from '../../_utilities/CircularSpinner';

class DeleteRoleModal extends Component {
  constructor(props) {
    super(props);
    // define internal state
    this.state = initialState;
  }

  handleConfirm = async (event) => {
    event.preventDefault();

    // Get the modal container
    /* istanbul ignore next */
    const modal = M.Modal.getInstance(
      document.querySelector('#modalDeleteRole'),
    );

    /* istanbul ignore next */
    this.setState({ loading: true });

    /* istanbul ignore next */
    await this.props.fnDeleteRole(this.props.roleId);

    /* istanbul ignore next */
    this.setState({ loading: false }); // Hide loading spinner

    /* istanbul ignore next */
    this.setState({ visible: false }); // Hide the modal container

    /* istanbul ignore next */
    modal.close(); // Close the modal container
  };

  render() {
    return (
      <div
        id="modalDeleteRole"
        className="modal"
        data-test="component--modal--delete-role"
      >
        <div className="modal-content">
          <h3>Delete '{this.props.roleName}' Role</h3>
          <p>Are you sure you want to delete this role?</p>
        </div>
        <div className="modal-footer">
          <div className="row">
            <div className="col s6 m6">
              {/* Loading spinner */}
              {this.state.loading ? <CircularSpinner /> : null}
            </div>

            <div className="col s6 m6">
              <a className="modal-close waves-effect waves-green btn-flat">
                No, Cancel
              </a>
              <span>&nbsp;</span>
              <a
                href="#"
                className="waves-effect waves-green btn"
                onClick={this.handleConfirm.bind(this)}
                data-test="button--confirm-delete-role"
              >
                Yes, Delete
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DeleteRoleModal.propTypes = {
  roleId: PropTypes.number.isRequired,
  roleName: PropTypes.string,
  fnDeleteRole: PropTypes.func.isRequired,
};

export default DeleteRoleModal;
