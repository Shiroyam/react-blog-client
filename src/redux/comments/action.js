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

export const getComment = (num) => async (dispatch) =>{
    try {
    const response = await instance.get(`/comments?page=${num}`)
    const commentsData = response.data
    const total = commentsData.total
     dispatch({
        type:"GET_COMMENT",
        payload:{commentsData, total}
    })
    } catch (error) {
        alert(error)
    }
   
   
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