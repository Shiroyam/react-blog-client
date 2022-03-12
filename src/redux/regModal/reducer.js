const initState = {
  flag: false,
};

export const regReducer = (state = initState, action) => {
    switch (action.type) {
    case "OPEN_FORM":
      return { ...state, flag: !state.flag };
    case "CLOSE_FORM":
      return { ...state, flag: !state.flag };
    default:
      return state;
  }
};
