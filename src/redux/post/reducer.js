const inintState = []

export const postReducer = (state = inintState , action) =>{
    switch(action.type){
        case "GET_POST":
                return action.payload
        case "OPEN_POST":
                return action.payload
        default:
            return state
    }
}