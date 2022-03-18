import React from "react";
import s from "./registration.module.scss";
import close from "./../../../assets/png/Close.png";
import { useDispatch } from "react-redux";
import { closeFormReg , registrationPost} from "../../../redux/registration/regAction";


const Registration = () => {
  const dispatch = useDispatch();
  const postReg = (name, email, password) => {
    dispatch(registrationPost(name, email, password))
    dispatch(closeFormReg())
  }
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

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

        <div className={s.registration__inputName}>
          <div className={s.registration__header}>Имя и фамилия</div>
          <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className={s.registration__input} />
        </div>

        <div className={s.registration__inputEmail}>
          <div className={s.registration__header}>Email</div>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className={s.registration__input} />
        </div>

        <div className={s.registration__inputPassword}>
          <div className={s.registration__header}>Пароль</div>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className={s.registration__input} />
        </div>
        <button onClick={() => postReg(name, email, password)} className={s.btn}>Зарегистрироваться</button>
      </div>
    </div>
  );
};

export default Registration;
