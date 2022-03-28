import { instance } from "../../config/axios";

export const editingPost = (id, data) => async (dispatch) => {
  try {
    await instance.patch(`/posts/${id}`, {
      title: data.title,
      text: data.text,
      description: data.description,
      photoUrl: data.photoUrl,
    });
    dispatch({
        type:"POST_EDITING"
    })
  } catch (error) {
      console.log(error)
  }
};

export const createPost = (data) => async (dispatch) => {
  try {
    await instance.post("/posts", {
      title: data.title,
      text: data.text,
      description: data.description,
      photoUrl: data.photoUrl,
    });
  } catch (error) {
    alert(error);
  }

  dispatch({
    type: "POST_CREATE",
  });
};
