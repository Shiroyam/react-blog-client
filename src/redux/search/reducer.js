const initState = {
  flag: true,
};

export const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case "OPEN_SEARCH":
      return { ...state, flag: !state.flag };
    case "CLOSE_SEARCH":
      return { ...state, flag: !state.flag };
    default:
      return state;
  }
};
