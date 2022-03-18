import s from "./pogination.module.scss";
import arrowRight from "./../../assets/png/arrowRight.png";
import arrowLeft from "./../../assets/png/arrowLeft.png";
import { useSelector } from "react-redux";
const Pogination = () => {
  const profile = useSelector((state) => state.profile.flag);
  return (
    <>
      {!profile && (
        <div className={s.pogination}>
          <div className={s.pogination__btnContainer}>
            <button className={s.pogination__btnLeft}>
              <img src={arrowLeft}></img>
            </button>
            <button className={s.pogination__btnRight}>
              <img src={arrowRight}></img>
            </button>
          </div>
          <div className={s.pogination__numberPage}>Страница 1 из 10</div>
        </div>
      )}
    </>
  );
};

export default Pogination;
