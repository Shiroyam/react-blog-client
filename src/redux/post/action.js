import { instance } from "../../config/axios";

export const getPost = () => async (dispatch) => {
  try {
    const { data } = await instance.get("/posts?limit=4");
    dispatch({
      type: "GET_POST",
      payload: data,
    });
  } catch (error) {
    alert(error);
  }
};

export const openPost = (id) => async (dispatch) => {
  try {
  const {data} = await instance(`/posts/${id}`);
    dispatch({
      type: "OPEN_POST",
      payload: data,
    });
  } catch (error) {
    alert(error);
  }
};
