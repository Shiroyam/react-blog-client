import { instance } from "../../config/axios"

export const getComments = (id) => async (dispatch) => {
    try {
        const response = await instance.get(`/comments/post/${id}`)
        const commentData = response.data
        dispatch({
            type:"GET_COMMENTS",
            payload: commentData
        })
    } catch (error) {
        alert(error)
    }
}

export const getComment = () => async (dispatch) =>{
    const response = await instance.get(`/comments`)
    const commentsData = response.data
    dispatch({
        type:"GET_COMMENT",
        payload:commentsData
    })
}

export const postComments = (text,id) => async (dispatch) => {
    try {
        await instance.post("/comments",{
            "text":`${text}` ,
            "postId":`${id}`
        })
        dispatch({
            type:"POST_COMMENTS"
        })
    } catch (error) {
        alert(error)
    }
}