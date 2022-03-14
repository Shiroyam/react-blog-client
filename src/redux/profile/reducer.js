const initState = {
  flag: false,
};

export const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case "OPEN_PROFILE":
      return { ...state, flag: true};
    case "CLOSE_PROFILE":
      return { ...state, flag: false };
    default:
      return state;
  }
};
