const initState = []
    
export const commentsReducer = (state =initState, action) => {
    switch (action.type) {
        case"GET_COMMENTS":
            return {...state, response: action.payload}
        case"GET_COMMENT":
            return {...state, comment:action.payload}
        case"POST_COMMENTS":
            return state;    
        case"DELETE_COMMENT":
            return state;
        case"EDITING_COMMENT":
            return state;
        default:
            return state;
    }
}