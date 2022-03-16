import { instance } from "../../config/axios";
export const openPost = (id) => async (dispatch) => {
    try {
    const {data} = await instance.get(`/posts/${id}`);
      dispatch({
        type: "OPEN_POST",
        payload: data,
      });
    } catch (error) {
      alert(error);
    }
  };

