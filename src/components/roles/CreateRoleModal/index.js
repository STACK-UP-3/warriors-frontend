import React from 'react';
import PropTypes from 'prop-types';
// file imports
import { initialState } from './state';
import CircularSpinner from '../../_utilities/CircularSpinner';
import { formOnChangeRoleInput } from '../../../handlers/events/roles/formInputOnChange';
import { formSubmitCreateRole } from '../../../handlers/events/roles/formOnSubmit';

class CreateRoleModal extends React.Component {
  constructor(props) {
    super(props);

    // Set initial component state
    this.state = initialState;
  }

  reset = () => {
    this.setState(initialState);
  };

  handleOnChange = (event) => {
    formOnChangeRoleInput(event, this);
  };

  handleSubmit = async (event) => {
    await formSubmitCreateRole(event, this);
  };

  render() {
    return (
      <div
        id="modalCreateRole"
        className="modal modal-fixed-footer"
        data-test="component--modal--create-role"
      >
        <div className="modal-content">
          <h4>Add New Role</h4>
          <div className="row">
            <form
              method="POST"
              className="col s12"
              onSubmit={(event) => this.handleSubmit(event)}
              data-test="form--create-role"
            >
              {/* Input: Role Name */}
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="roleName"
                    type="text"
                    name="role-name"
                    className="validate"
                    value={this.state.roleName}
                    onChange={(event) => this.handleOnChange(event)}
                    required
                    data-test="input--role-name"
                  />
                  <label htmlFor="roleName">Role Name</label>
                </div>
              </div>
              {/* Input: Role Permissions - map array to input fields */}
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
          <button
            type="reset"
            className="modal-close waves-effect waves-green btn-flat"
            onClick={this.reset.bind(this)}
          >
            Close Without Saving
          </button>
        </div>
      </div>
    );
  }
}

CreateRoleModal.propTypes = {
  fnCreateRole: PropTypes.func.isRequired,
};

export default CreateRoleModal;
