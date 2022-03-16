import s from "./registration.module.scss";
import close from "./../../../assets/png/Close.png";
import { useDispatch } from "react-redux";
import { closeFormReg } from "../../../redux/registration/regAction";

const Registration = () => {
  const dispatch = useDispatch();
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
          <input type="text" className={s.registration__input} />
        </div>

        <div className={s.registration__inputEmail}>
          <div className={s.registration__header}>Email</div>
          <input type="text" className={s.registration__input} />
        </div>

        <div className={s.registration__inputPassword}>
          <div className={s.registration__header}>Пароль</div>
          <input type="password" className={s.registration__input} />
        </div>
        <button className={s.btn}>Зарегистрироваться</button>
      </div>
    </div>
  );
};

export default Registration;
