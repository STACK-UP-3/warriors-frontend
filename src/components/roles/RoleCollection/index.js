import React from 'react';
import PropTypes from 'prop-types';

import RoleCard from '../RoleCard';
import LinearSpinner from '../../_utilities/LinearSpinner';

const RoleCollection = (props) => {
  // Define feedback for empty state
  const emptyMessage = <p>There are no roles yet in your collection</p>;

  // Iterate through our array of Roles from storage to setup Role cards
  const roleCardCollection = (
    <div className="row">
      {props.arrRoles.map((role, index) => (
        <div key={index} className="col s12 m4">
          <RoleCard
            roleId={role.id}
            roleName={role.name}
            rolePermissions={role.permissions}
            fnOpenModelEdit={props.fnOpenEditRoleModal}
            fnOpenModalDelete={props.fnOpenModalDeleteRole}
          />
        </div>
      ))}
    </div>
  );

  //
  return (
    <div>
      <div>
        {/* Loading spinner */}
        {props.loading ? <LinearSpinner /> : null}
      </div>
      {props.arrRoles.length === 0 ? emptyMessage : roleCardCollection}
    </div>
  );
};

RoleCollection.propTypes = {
  arrRoles: PropTypes.array.isRequired,
};

export default RoleCollection;
