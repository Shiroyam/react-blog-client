import s from "./pogination.module.scss";
import React from "react";
import arrowRight from "./../../assets/png/arrowRight.png";
import arrowLeft from "./../../assets/png/arrowLeft.png";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../redux/posts/action";
import { getComment } from "../../redux/comments/action";

const Pogination = () => {
  const values = useSelector((state) => state.search.value);
  const toggleSwitcher = useSelector((state) => state.profile.toggleSwitcher);
  const [numberPage, setNumberPage] = React.useState(1);
  const [numberComments, setNumberComments] = React.useState(1);
  const dispatch = useDispatch();
  const page = useSelector((state) => state.post);
  const total = Math.ceil(page.total / 4);

  React.useEffect(() => {
    dispatch(getPost(numberPage , values));
  }, [values]);

  const poginationPostLeft = () => {
    if (numberPage > 1 && toggleSwitcher) {
      setNumberPage(numberPage - 1);
      dispatch(getPost(numberPage - 1, values));
    } else if (numberComments > 1) {
      setNumberComments(numberComments - 1);
      dispatch(getComment(numberComments - 1));
    }
  };

  const poginationPostRight = () => {
    if (numberPage < total && toggleSwitcher) {
      setNumberPage(numberPage + 1);
      dispatch(getPost(numberPage + 1, values));
    } else {
      setNumberComments(numberComments + 1);
      dispatch(getComment(numberComments + 1));
    }
  };

  return (
    <>
      <div className={s.pogination}>
        <div className={s.pogination__btnContainer}>
          <button
            onClick={poginationPostLeft}
            className={s.pogination__btnLeft}
          >
            <img src={arrowLeft}></img>
          </button>
          <button
            onClick={poginationPostRight}
            className={s.pogination__btnRight}
          >
            <img src={arrowRight}></img>
          </button>
        </div>
        <div className={s.pogination__numberPage}>
          {toggleSwitcher ? `Страница ${numberPage} из ${total}` : ``}
        </div>
      </div>
    </>
  );
};

export default Pogination;
