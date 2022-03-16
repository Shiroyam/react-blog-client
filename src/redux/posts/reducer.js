const inintState = []

export const postsReducer = (state = inintState , action) =>{
    switch(action.type){
        case "GET_POST":
                return action.payload
        default:
            return state
    }
}