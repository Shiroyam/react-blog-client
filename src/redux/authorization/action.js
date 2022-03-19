import { instance } from "../../config/axios";
export const openFormAuth = () => {
    return{
        type: "OPEN_FORM_AUTH"
    }
}

export const closeFormAuth = () => {
    return{
        type: "CLOSE_FORM_AUTH"
    }
}

export const authorizationPost = (email, password) => async (dispatch) =>{
    
    try {
        const response = await instance
          .post("/auth/login", {
            email: email,
            password: password,
          })
          .then((response) => {
            const token = response.data.token;
            const id = response.data._id;
            const name = response.data.fullName;
            localStorage.setItem("token", token);
            localStorage.setItem("id", id);
            localStorage.setItem("name", name);
          });
          dispatch({
              type:"POST_AUTH",
              paylaod: response
          })
      } catch (error) {
        alert(error);
      }
}