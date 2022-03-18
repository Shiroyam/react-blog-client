import s from "./pogination.module.scss";
import React from "react";
import arrowRight from "./../../assets/png/arrowRight.png";
import arrowLeft from "./../../assets/png/arrowLeft.png";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../redux/posts/action";

const Pogination = () => {
  const [numberPage, setNumberPage] = React.useState(1);
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.flag);
  const page = useSelector((state) => state.post);
  const total = Math.ceil(page.total / 4);

  const poginationPostLeft = () => {
    if (numberPage > 1) {
      setNumberPage(numberPage - 1);
      dispatch(getPost(numberPage - 1));
    }
  };

  const poginationPostRight = () => {
    if (numberPage < total) {
      setNumberPage(numberPage + 1);
      dispatch(getPost(numberPage + 1));
    }
  };

  return (
    <>
      {!profile && (
        <div className={s.pogination}>
          <div className={s.pogination__btnContainer}>
            <button
              onClick={poginationPostLeft}
              className={
                numberPage == 1
                  ? `${s.pogination__btnLeft} ${s.disabled}`
                  : `${s.pogination__btnLeft}`
              }
            >
              <img src={arrowLeft}></img>
            </button>
            <button
              onClick={poginationPostRight}
              className={numberPage == total?`${s.pogination__btnRight} ${s.disabled}`:`${s.pogination__btnRight}`}
            >
              <img src={arrowRight}></img>
            </button>
          </div>
          <div className={s.pogination__numberPage}>
            Страница {numberPage} из {total}
          </div>
        </div>
      )}
    </>
  );
};

export default Pogination;
