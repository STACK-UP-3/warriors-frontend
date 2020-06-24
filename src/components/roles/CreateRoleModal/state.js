// Define initial state of Component
export const initialState = {
  roleName: '',
  inputPermissions: [
    { label: 'Create trip request', value: 'create-trip', checked: true },
    { label: 'Edit trip request', value: 'edit-trip', checked: false },
    { label: 'Accept trip requests', value: 'accept-trip', checked: false },
    { label: 'Reject trip requests', value: 'reject-trip', checked: false },
    {
      label: 'Create accommodation facilities',
      value: 'create-accommodation',
      checked: false,
    },
    {
      label: 'Edit accommodation facilities',
      value: 'edit-accommodation',
      checked: false,
    },
  ],
  errors: {},
  loading: false,
};
