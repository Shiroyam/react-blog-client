import s from "./authorization.module.scss";
import close from "./../../../assets/png/Close.png";
import { useDispatch} from "react-redux";
import { closeForm } from "../../../redux/regModal/action";


const Authorization = () => {
    const dispatch = useDispatch()
    const closeRegistration = () => {
        dispatch(closeForm())
      } 
  return (     
        <div className={s.authorization}>
          <div className={s.authorization__modal}>
            <div className={s.authorization__headerContent}>
              <div className={s.authorization__header}>Авторизация</div>
              <img onClick={closeRegistration} src={close} className={s.authorization__iconClose}></img>
            </div>
            <div className={s.authorization__inputName}>
              <div className={s.authorization__header}>Имя и фамилия</div>
              <input type="text" className={s.authorization__input} />
            </div>
            <div className={s.authorization__inputPassword}>
              <div className={s.authorization__header}>Пароль</div>
              <input type="password" className={s.authorization__input} />
            </div>
            <button className={s.btn}>Войти</button>
          </div>
        </div>
  );
};

export default Authorization;
