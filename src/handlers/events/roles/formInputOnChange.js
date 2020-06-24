export const formOnChangeRoleInput = (event, context) => {
  switch (event.target.name) {
    // Set Role name
    case 'role-name':
      context.setState({ roleName: event.target.value });
      break;

    // Set Role permissions
    case 'chk-create-trip':
      context.state.inputPermissions = context.state.inputPermissions.map(
        (input) => {
          if (input.value === 'create-trip') {
            input.checked = !input.checked;
          }
          return input;
        },
      );
      break;
    case 'chk-edit-trip':
      context.state.inputPermissions = context.state.inputPermissions.map(
        (input) => {
          if (input.value === 'edit-trip') {
            input.checked = !input.checked;
          }
          return input;
        },
      );
      break;
    case 'chk-accept-trip':
      context.state.inputPermissions = context.state.inputPermissions.map(
        (input) => {
          if (input.value === 'accept-trip') {
            input.checked = !input.checked;
          }
          return input;
        },
      );
      break;
    case 'chk-reject-trip':
      context.state.inputPermissions = context.state.inputPermissions.map(
        (input) => {
          if (input.value === 'reject-trip') {
            input.checked = !input.checked;
          }
          return input;
        },
      );
      break;
    case 'chk-create-accommodation':
      context.state.inputPermissions = context.state.inputPermissions.map(
        (input) => {
          if (input.value === 'create-accommodation') {
            input.checked = !input.checked;
          }
          return input;
        },
      );
      break;
    case 'chk-edit-accommodation':
      context.state.inputPermissions = context.state.inputPermissions.map(
        (input) => {
          if (input.value === 'edit-accommodation') {
            input.checked = !input.checked;
          }
          return input;
        },
      );
      break;

    default:
      break;
  }
};
