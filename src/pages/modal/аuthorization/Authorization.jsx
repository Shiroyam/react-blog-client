import React from "react";
import s from "./authorization.module.scss";
import close from "./../../../assets/png/Close.png";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {
  closeFormAuth,
  authorizationPost,
} from "../../../redux/authorization/action";
import { openFormReg } from "../../../redux/registration/regAction";

const Authorization = () => {
  const {
    register,
    formState: { errors},
    handleSubmit,
  } = useForm({
    mode:"onBlur"
  });

  const dispatch = useDispatch();

  const authPost = (data) => {
    dispatch(authorizationPost(data.email, data.password));
    dispatch(closeFormAuth());
  };

  const openReg = () => {
    dispatch(closeFormAuth());
    dispatch(openFormReg());
  };

  return (
    <div className={s.authorization}>
      <div className={s.authorization__modal}>
        <div className={s.authorization__content}>
          <div className={s.authorization__headerContent}>
            <div className={s.authorization__header}>Авторизация</div>
            <img
              onClick={() => dispatch(closeFormAuth())}
              src={close}
              className={s.authorization__iconClose}
            ></img>
          </div>
          <form onSubmit={handleSubmit(authPost)}> 
            <div className={s.authorization__inputName}>
              <div className={s.authorization__header}>Email</div>
              <input
                {...register("email", {
                  required: "Поле обязательно!",
                  minLength: {
                    value:6,
                    message: "Нужно ввести минимум 6 символа!"
                  }
                })}
                type="email"
                className={s.authorization__input}
              />
              <div className={s.authorization__context}>{errors?.email && <p>{errors?.email?.message || "Error!"}</p>}</div>
            </div>
            <div className={s.authorization__inputPassword}>
              <div className={s.authorization__header}>Пароль</div>
              <input
                 {...register("password", {
                   required: true,
                   minLength: {
                     value:8,
                     message: "Пароль должен содержать 8 символов!"
                   }
                 })}               
                type="password"
                className={s.authorization__input}
              />
               <div className={s.authorization__context}>{errors?.password && <p>{errors?.password?.message || "Error!"}</p>}</div>
            </div>
            <button
              type="submit"
              className={s.btn}
            >
              Войти
            </button>
          </form>
          <div onClick={openReg} className={s.authorization__link}>
            Хотите зарегистрироваться?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
