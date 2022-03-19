import s from "./comments.module.scss";
import React from "react";
import { useSelector } from "react-redux";
const Comments = () => {
  const comments = useSelector((state) => state.comments);
  const toggleSwitcher = useSelector((state) => state.profile.toggleSwitcher);

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
          {(comments.comment.commentsData.items ?? []).map((comment) => (
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
