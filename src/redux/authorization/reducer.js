const initState = {
  flagAuth: false,
  };
  
  export const authReducer = (state = initState, action) => {
      switch (action.type) {
      case "OPEN_FORM_AUTH":
        return { ...state, flagAuth: true };
      case "CLOSE_FORM_AUTH":
        return { ...state, flagAuth: false };
      default:
        return state;
    }
  };
  