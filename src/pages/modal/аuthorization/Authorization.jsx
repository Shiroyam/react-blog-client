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
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const dispatch = useDispatch();

  const authPost = (data) => {
    dispatch(authorizationPost(data));
    dispatch(closeFormAuth());
  };

  const openReg = () => {
    dispatch(closeFormAuth());
    dispatch(openFormReg());
  };

  return (
    <div className={s.authorization}>
      <div className={s.modal}>
        <div className={s.content}>
          <div className={s.headerContent}>
            <div className={s.headerContent__header}>Авторизация</div>
            <img
              onClick={() => dispatch(closeFormAuth())}
              src={close}
              className={s.headerContent__iconClose}
            ></img>
          </div>
          <form onSubmit={handleSubmit(authPost)}>
            <div className={s.inputName}>
              <div className={s.inputName__header}>Email</div>
              <input
                {...register("email", {
                  required: "Поле обязательно!",
                  minLength: {
                    value: 6,
                    message: "Нужно ввести минимум 6 символа!",
                  },
                })}
                type="email"
                className={s.inputName__input}
              />
              <div className={s.inputName__context}>
                {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
              </div>
            </div>
            <div className={s.inputPassword}>
              <div className={s.inputPassword__header}>Пароль</div>
              <input
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 8,
                    message: "Пароль должен содержать 8 символов!",
                  },
                })}
                type="password"
                className={s.inputPassword__input}
              />
              <div className={s.inputPassword__context}>
                {errors?.password && (
                  <p>{errors?.password?.message || "Error!"}</p>
                )}
              </div>
            </div>
            <button type="submit" className={s.btn}>
              Войти
            </button>
          </form>
          <div onClick={openReg} className={s.link}>
            Хотите зарегистрироваться?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
