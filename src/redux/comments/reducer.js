const initState = []
    
export const commentsReducer = (state =initState, action) => {
    switch (action.type) {
        case"GET_COMMENTS":
            return {...state, response: action.payload}
        case"POST_COMMENTS":
            return state;
        default:
            return state;
    }
}