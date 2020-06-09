const initialState={
    isResetLinkSent:false,
    isPasswordReset:false
};

export const resetReducer = (state = initialState, action) => {
    const { type, payload,password } = action;
    switch (type) {
      case "RESET_PASSWORD":
        return {
          ...state,
          isPasswordReset: payload,
        };
        case "SEND_RESET_EMAIL_ACTION":
          return {
            ...state,
            isResetLinkSent: payload,
          };
      default:
        return initialState;
    }
  };