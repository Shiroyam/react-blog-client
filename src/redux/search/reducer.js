const initState = {
  flag: true,
  value: "",
};

export const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case "OPEN_SEARCH":
      return { ...state, flag: false };
    case "CLOSE_SEARCH":
      return { ...state, flag: true };
    case "VALUE_INPUT":
      return { ...state, value: action.payload };
    default:
      return state;
  }
};
