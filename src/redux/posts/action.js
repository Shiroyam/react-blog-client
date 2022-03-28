import { instance } from "../../config/axios";

export const getPost = (numberPage, values) => async (dispatch) => {
  try {
    const { data } = await instance.get(
      `/posts?page=${numberPage}&query=${values}&limit=4`
    );
    dispatch({
      type: "GET_POST",
      payload: data,
    });
  } catch (error) {
    alert(error);
  }
};
