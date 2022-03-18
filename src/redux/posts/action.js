import { instance } from "../../config/axios";

export const getPost = (numberPage) => async (dispatch) => {
  try {
    const { data } = await instance.get(`/posts?page=${numberPage}&limit=4`);
    dispatch({
      type: "GET_POST",
      payload: data,
    });
  } catch (error) {
    alert(error);
  }
};

