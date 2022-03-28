
const initState = {
  flag: false,
  toggleSwitcher: true,
  comments: []
};

export const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case "OPEN_PROFILE":
      return { ...state, flag: true};
    case "CLOSE_PROFILE":
      return { ...state, flag: false };
    case "OPEN_COMMENTS":
      return {...state, toggleSwitcher: false}
    case "OPEN_POSTS":
      return {...state, toggleSwitcher:true}
    case "GET_COMMENTS_PROFILE":
      return {...state, comments:action.payload}
    default:
      return state;
  }
};
