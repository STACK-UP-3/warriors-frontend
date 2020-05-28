import React, { Component } from 'react';
import PropTypes from 'prop-types';
// file imports
import { initialState } from './state';
import CircularSpinner from '../../_utilities/CircularSpinner';
import { formOnChangeRoleInput } from '../../../handlers/events/roles/formInputOnChange';
import { formSubmitEditRole } from '../../../handlers/events/roles/formOnSubmit';

class EditRoleModal extends Component {
  constructor(props) {
    super(props);

    // Initialise local state of Component
    this.state = initialState;
  }

  reset = () => {
    this.setState(initialState);
  };

  handleOnChange = (event) => {
    formOnChangeRoleInput(event, this);
  };

  handleSubmit = async (event) => {
    await formSubmitEditRole(event, this);
  };

  render() {
    return (
      <div
        id="modalEditRole"
        className="modal"
        data-test="component--modal--edit-role"
      >
        <div className="modal-content">
          <h4>{this.props.roleName}</h4>
          <h5>Edit Role</h5>

          <div className="row">
            <form
              method="POST"
              className="col s12"
              onSubmit={(event) => this.handleSubmit(event)}
              data-test="form--edit-role"
            >
              {/* Role Name */}
              <div className="row">
                <div className="input-field col s12">
                  <label htmlFor="roleName">Role Name</label>
                  <input
                    type="text"
                    id="roleName"
                    name="role-name"
                    className="validate"
                    required
                    value={this.state.roleName}
                    onChange={(event) => this.handleOnChange(event)}
                    data-test="input--role-name"
                  />
                </div>
              </div>
              {/* Role Permissions: map array to input fields */}
              <div className="row">
                {this.state.inputPermissions.map((permission) => (
                  <div
                    className="col s12"
                    key={permission.value}
                    data-test={`input--chk-${permission.value}`}
                  >
                    <label>
                      <input
                        type="checkbox"
                        name={`chk-${permission.value}`}
                        value={permission.value}
                        defaultChecked={!!permission.checked}
                        onChange={this.handleOnChange.bind(this)}
                      />
                      <span>{permission.label}</span>
                    </label>
                  </div>
                ))}
              </div>
              {/* Submit button */}
              <button type="submit" className="waves-effect waves-green btn">
                Save Changes
              </button>
              &nbsp; &nbsp;
              {/* Loading spinner */}
              {this.state.loading ? <CircularSpinner /> : null}
            </form>
          </div>
        </div>
        <div className="modal-footer">
          <a
            href="#"
            className="modal-close waves-effect waves-green btn-flat"
            onClick={this.reset.bind(this)}
          >
            Close without saving
          </a>
        </div>
      </div>
    );
  }
}

EditRoleModal.propTypes = {
  roleId: PropTypes.number.isRequired,
  roleName: PropTypes.string,
  fnUpdateRole: PropTypes.func.isRequired,
};

export default EditRoleModal;
