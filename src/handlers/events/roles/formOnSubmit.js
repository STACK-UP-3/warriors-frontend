import M from 'materialize-css'; // Materialize JS

export const formSubmitCreateRole = async (event, context) => {
  event.preventDefault();

  // Show loading spinner
  context.setState({ loading: true });

  // Get the modal container
  /* istanbul ignore next */
  const modal = M.Modal.getInstance(document.querySelector('#modalCreateRole'));

  // Get role data (name, permissions) from Component state
  /* istanbul ignore next */
  const { roleName } = context.state;
  /* istanbul ignore next */
  let arrPermissions = context.state.inputPermissions.filter(
    (item) => item.checked,
  );
  /* istanbul ignore next */
  arrPermissions = arrPermissions.map((item) => item.value);

  // Dispatch action to save new role
  /* istanbul ignore next */
  await context.props.fnCreateRole({
    name: roleName,
    permissions: arrPermissions.join(),
  });

  /* istanbul ignore next */
  context.setState({ loading: false }); // Hide loading spinner
  /* istanbul ignore next */
  modal.close(); // Close the modal container
};

export const formSubmitEditRole = async (event, context) => {
  event.preventDefault();

  // Show loading spinner
  context.setState({ loading: true });

  // Get the modal container
  /* istanbul ignore next */
  const modal = M.Modal.getInstance(document.querySelector('#modalEditRole'));

  // Get role data (permissions) from Component state
  /* istanbul ignore next */
  let arrPermissions = context.state.inputPermissions.filter(
    (item) => item.checked,
  );
  /* istanbul ignore next */
  arrPermissions = arrPermissions.map((item) => item.value);

  // Dispatch action to update a specific Role
  /* istanbul ignore next */
  await context.props.fnUpdateRole(context.props.roleId, {
    name: context.state.roleName,
    permissions: arrPermissions.join(),
  });

  /* istanbul ignore next */
  context.setState({ loading: false }); // Hide loading spinner
  /* istanbul ignore next */
  modal.close(); // Close the modal container
};
