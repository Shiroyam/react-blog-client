import { instance } from "../../config/axios";
const inintState = {
}
export const postReducer = (state = inintState , action) =>{
    switch(action.type){
        case "GET_POST":
                return action.payload
        default:
            return state
    }
}