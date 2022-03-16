const inintState = []

export const postReducer = (state = inintState , action) =>{
    switch(action.type){
        case "OPEN_POST":
                return action.payload
        default:
            return state
    }
}

