const initState = {
  flag: true,
};

export const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case "OPEN_SEARCH":
      return { ...state, flag: false };
    case "CLOSE_SEARCH":
      return { ...state, flag: true};
    default:
      return state;
  }
};
