import { instance } from "../../config/axios";
export const openFormReg = () => {
  return {
    type: "OPEN_FORM_REG",
  };
};

export const closeFormReg = () => {
  return {
    type: "CLOSE_FORM_REG",
  };
};

export const registrationPost = (fullName, email, password) => async (dispatch) => {
  try {
     await instance.post("/auth/register", {
      fullName: fullName,
      email: email,
      password: password,
    });
    dispatch({
        type:"POST_REG",
    })
  } catch (error) {
    alert(error);
  }
};
