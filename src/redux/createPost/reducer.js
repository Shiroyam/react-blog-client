const initState = []

export const postCreateReducer = (state = initState, action) => {
    switch (action.type) {
        case "POST_CREATE":
            return state
        default:
            return state
    }
}