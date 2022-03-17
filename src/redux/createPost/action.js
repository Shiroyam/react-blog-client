import { instance } from "../../config/axios"

export const createPost = (title, photoUrl, description,text ) => async (dispatch) => {
    await instance.post ("/posts",{
        "title":title,
        "text":text,
        "description":description,
        "photoUrl":photoUrl
    })
    dispatch({
        type:"POST_CREATE"
    })
}