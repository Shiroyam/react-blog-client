import { instance } from "../../config/axios"

export const createPost = (title, photoUrl, description,text ) => async (dispatch) => {
    try {
        await instance.post ("/posts",{
        "title":title,
        "text":text,
        "description":description,
        "photoUrl":photoUrl
    })
    } catch (error) {
        alert(error)
    }
    
    dispatch({
        type:"POST_CREATE"
    })
}