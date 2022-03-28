import { instance } from "../../config/axios"
export const openProfile = () => {
    return{
        type:"OPEN_PROFILE"
    }
}

export const closeProfile = () => {
    return{
        type:"CLOSE_PROFILE"
    }
}

export const switchToggleComments = () => {
    return {
        type:"OPEN_COMMENTS"
    }
}

export const switchTogglePosts = () => {
    return {
        type:"OPEN_POSTS"
    }
}

export const profileComments = () => async (dispatch) =>{
    try {
        const {data} = await instance.get('/comments')
        dispatch({
            type:"GET_COMMENTS_PROFILE",
            payload: data
        })  
    } catch (error) {
        alert(error)
    }
}



