const initState = {
    flagReg:false
}

export const regReducer =(state = initState, action) =>{
    switch (action.type) {
        case "OPEN_FORM_REG":
            return {...state, flagReg: true}
        case "CLOSE_FORM_REG":
            return {...state, flagReg: false}
        default:
            return state
    }
}