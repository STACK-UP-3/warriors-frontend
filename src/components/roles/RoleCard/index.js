import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RoleCard extends Component {
  /**
   * Some roles cannot be edited/deleted
   */
  displayActionButtons() {
    if (this.props.roleName !== 'Super Administrator') {
      return (
        <div className="card-action" data-test="action-buttons">
          <a
            href="#modalEditRole"
            className="modal-trigger"
            onClick={() => this.props.fnOpenModelEdit(this.props.roleId)}
            data-test="edit-action-button"
          >
            Edit
          </a>
          <a
            href="#modalDeleteRole"
            className="modal-trigger"
            onClick={() => this.props.fnOpenModalDelete(this.props.roleId)}
            data-test="delete-action-button"
          >
            Delete
          </a>
        </div>
      );
    }
  }

  render() {
    return (
      <div data-test="component--card--role-record">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{this.props.roleName}</span>
            <p>{this.props.rolePermissions}</p>
          </div>
          {/* Show action button only for non-super-admins */}
          {this.displayActionButtons()}
        </div>
      </div>
    );
  }
}

RoleCard.propTypes = {
  roleId: PropTypes.number.isRequired,
  roleName: PropTypes.string.isRequired,
  rolePermissions: PropTypes.string,
};

export default RoleCard;
