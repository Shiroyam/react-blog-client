import React from "react";
import s from "./authorization.module.scss";
import close from "./../../../assets/png/Close.png";
import { useDispatch } from "react-redux";
import {
  closeFormAuth,
  authorizationPost,
} from "../../../redux/authorization/action";
import { openFormReg } from "../../../redux/registration/regAction";

const Authorization = () => {
  const dispatch = useDispatch();

  const authPost = (email, password) => {
    dispatch(authorizationPost(email, password));
    dispatch(closeFormAuth());
  };

  const openReg = () => {
    dispatch(closeFormAuth());
    dispatch(openFormReg());
  };

  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
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
          <div className={s.authorization__inputName}>
            <div className={s.authorization__header}>Email</div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className={s.authorization__input}
            />
          </div>
          <div className={s.authorization__inputPassword}>
            <div className={s.authorization__header}>Пароль</div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className={s.authorization__input}
            />
          </div>
          <button onClick={() => authPost(name, password)} className={s.btn}>
            Войти
          </button>
          <div onClick={openReg} className={s.authorization__link}>
            Хотите зарегистрироваться?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
