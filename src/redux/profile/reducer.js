const initState = {
  flag: false,
  comments: []
};

export const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case "OPEN_PROFILE":
      return { ...state, flag: true};
    case "CLOSE_PROFILE":
      return { ...state, flag: false };
    case "GET_COMMENTS_PROFILE":
      return {...state, comments:action.payload}
    default:
      return state;
  }
};
