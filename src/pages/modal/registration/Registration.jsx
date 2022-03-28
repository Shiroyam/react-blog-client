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
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const postReg = (data) => {
    dispatch(registrationPost(data));
    dispatch(closeFormReg());
  };

  return (
    <div className={s.registration}>
      <div className={s.modal}>
        <div className={s.headerContent}>
          <div className={s.headerContent__header}>Регистрация</div>
          <img
            src={close}
            onClick={() => dispatch(closeFormReg())}
            className={s.headerContent__iconClose}
          ></img>
        </div>
        <form onSubmit={handleSubmit(postReg)}>
          <div className={s.inputName}>
            <div className={s.inputName__header}>Имя и фамилия</div>
            <input
              {...register("name", {
                required: "Поле обязательно!",
                minLength: {
                  value: 2,
                  message: "Нужно ввести минимум 2 символа!",
                },
              })}
              type="text"
              className={s.inputName__input}
            />
            <div className={s.inputName__context}>
              {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
            </div>
          </div>

          <div className={s.inputEmail}>
            <div className={s.inputEmail__header}>Email</div>
            <input
              {...register("email", {
                required: "Поле обязательно!",
                minLength: {
                  value: 3,
                  message: "Нужно ввести минимум 3 символа!",
                },
              })}
              type="email"
              className={s.inputEmail__input}
            />
            <div className={s.inputEmail__context}>
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
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
