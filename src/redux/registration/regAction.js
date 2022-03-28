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

export const registrationPost = (data) => async (dispatch) => {
  try {
     await instance.post("/auth/register", {
      fullName: data.name,
      email: data.email,
      password: data.password,
    });
    dispatch({
        type:"POST_REG",
    })
    alert("Поздравляем!Вы успешно создали аккаунт. Теперь вы можете зайти в него")
  } catch (error) {
    alert("Что-то пошло не так!");
  }
};
