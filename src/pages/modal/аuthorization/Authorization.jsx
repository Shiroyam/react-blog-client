import React from "react";
import s from "./authorization.module.scss";
import close from "./../../../assets/png/Close.png";
import { useDispatch } from "react-redux";
import { closeForm } from "../../../redux/regModal/action";
import { instance } from "../../../config/axios";

const Authorization = () => {
  const authPost = () => {
    try {
      instance
        .post("/auth/login", {
          email: name,
          password: password,
        })
        .then((response) => {
          const token = response.data.token;
          localStorage.setItem("token", token);
        });
    } catch (error) {
      alert(error);
    }
  };
  const dispatch = useDispatch();
  const closeRegistration = () => {
    dispatch(closeForm());
  };
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <div className={s.authorization}>
      <div className={s.authorization__modal}>
        <div className={s.authorization__headerContent}>
          <div className={s.authorization__header}>Авторизация</div>
          <img
            onClick={closeRegistration}
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
        <button onClick={authPost} className={s.btn}>
          Войти
        </button>
      </div>
    </div>
  );
};

export default Authorization;
