export const openSearch = () => {
  return {
    type: "OPEN_SEARCH",
  };
};

export const closeSearch = () => {
  return {
    type: "CLOSE_SEARCH",
  };
};

export const valueSearch = (text) => {
  return {
    type: "VALUE_INPUT",
    payload: text,
  };
};
