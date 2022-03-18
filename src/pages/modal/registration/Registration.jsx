import React from "react";
import s from "./registration.module.scss";
import close from "./../../../assets/png/Close.png";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  closeFormReg,
  registrationPost,
} from "../../../redux/registration/regAction";

const Registration = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode:"onBlur"
  });

  const dispatch = useDispatch();
  

  const postReg = (data) => {
    dispatch(registrationPost(data.name, data.email, data.password))
    window.location.reload()
  };

  return (
    <div className={s.registration}>
      <div className={s.registration__modal}>
        <div className={s.registration__headerContent}>
          <div className={s.registration__header}>Регистрация</div>
          <img
            src={close}
            onClick={() => dispatch(closeFormReg())}
            className={s.registration__iconClose}
          ></img>
        </div>
        <form onSubmit={handleSubmit(postReg)}>
          <div className={s.registration__inputName}>
            <div className={s.registration__header}>Имя и фамилия</div>
            <input
              {...register("name", {
                required: "Поле обязательно!",
                minLength: {
                  value: 2,
                  message: "Нужно ввести минимум 2 символа!",
                },
              })}
              type="text"
              className={s.registration__input}
            />
            <div className={s.registration__context}>{errors?.name && <p>{errors?.name?.message || "Error!"}</p>}</div>
          </div>

          <div className={s.registration__inputEmail}>
            <div className={s.registration__header}>Email</div>
            <input
              {...register("email", {
                required: "Поле обязательно!",
                minLength: {
                  value: 3,
                  message: "Нужно ввести минимум 3 символа!",
                },
              })}
              type="email"
              className={s.registration__input}
            />
            <div className={s.registration__context}>{errors?.email && <p>{errors?.email?.message || "Error!"}</p>}</div>
          </div>

          <div className={s.registration__inputPassword}>
            <div className={s.registration__header}>Пароль</div>
            <input
              {...register("password", {
                required: true,
                minLength: {
                  value: 8,
                  message: "Пароль должен содержать 8 символов!",
                },
              })}
              type="password"
              className={s.registration__input}
            />
            <div className={s.registration__context}>{errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
          </div>
          </div>
          <button type="submit" className={s.btn}>
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
