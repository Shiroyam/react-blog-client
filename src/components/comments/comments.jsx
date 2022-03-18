import s from "./comments.module.scss";
import React from "react";
import { getComments, getComment } from "../../redux/comments/action";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
const Comments = () => {
  const comments = useSelector((state) => state.comments);
  const toggleSwitcher = useSelector((state) => state.profile.toggleSwitcher);
  const dispatch = useDispatch();
  const { id } = useParams();
  React.useEffect(() => {
    if (toggleSwitcher) {
      dispatch(getComments(id));
    } else {
      dispatch(getComment());
    }
  }, [id]);

  return (
    <>
      {toggleSwitcher ? (
        <div className={s.post__commentsContainer}>
          <div className={s.post__headerComments}>
            <p className={s.post__header}>
              Комментарии (
              {comments.response instanceof Array
                ? comments.response.length
                : "0"}
              )
            </p>
            <div className={s.post__quantity}></div>
          </div>

          {(comments.response ?? []).map((comment) => (
            <div key={comment._id} className={s.post__coment}>
              <div className={s.post__headerComment}>
                <div className={s.post__header}>{comment.user.fullName}</div>
                <div className={s.post__date}>{comment.createdAt}</div>
              </div>
              <div className={s.post__text}>{comment.text}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className={s.post__commentsContainer}>
          {(comments.comment.items ?? []).map((comment) => (
            <div key={comment._id} className={s.post__coment}>
              <div className={s.post__headerComment}>
                <div className={s.post__header}>{comment.user.fullName}</div>
                <div className={s.post__date}>{comment.createdAt}</div>
              </div>
              <div className={s.post__text}>{comment.text}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
