import { instance } from "../../config/axios"

export const deletePost = (id) => async (dispatch) => {
        await instance.delete(`/posts/${id}`)
    dispatch({
        type:"DELETE_POST"
    })
}

