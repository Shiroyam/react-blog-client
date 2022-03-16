const initState = {
  flagAuth: false,
  };
  
  export const authReducer = (state = initState, action) => {
      switch (action.type) {
      case "OPEN_FORM_AUTH":
        return { ...state, flagAuth: true };
      case "CLOSE_FORM_AUTH":
        return { ...state, flagAuth: false };
      case "POST_AUTH":
        return {...state, ...action.payload}
      default:
        return state;
    }
  };
  