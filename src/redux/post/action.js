import { instance } from "../../config/axios"

export const getPost = () => async (dispatch ) => { 
    const {data} = await instance.get('/posts?limit=4')
    dispatch({       
            type: "GET_POST",  
            payload: data,
    })
}
