import s from "./comments.module.scss";
import React from "react";
import { useSelector } from "react-redux";
import { deleteComment, editingComment } from "../../redux/comments/action";
import { useDispatch } from "react-redux";

const Comments = () => {
  const [editingText, setEditingText] = React.useState("");
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);
  const toggleSwitcher = useSelector((state) => state.profile.toggleSwitcher);

  const clickBtnDelete = (id) => {
    dispatch(deleteComment(id));
    window.location.reload();
  };

  const onChangeText = (data, id) => {
    dispatch(editingComment(data, id));
  };

  return (
    <>
      {toggleSwitcher ? (
        <div className={s.post}>
          <div className={s.headerContainer}>
            <p className={s.headerContainer__header}>
              Комментарии (
              {comments.response instanceof Array
                ? comments.response.length
                : "0"}
              )
            </p>
            <div className={s.headerContainer__quantity}></div>
          </div>

          {(comments.response ?? []).map((comment) => (
            <div key={comment._id} className={s.coment}>
              <div className={s.headerContainer}>
                <div className={s.headerContainer__header}>
                  {comment.user.fullName}
                </div>
                <div className={s.headerContainer__date}>
                  {comment.createdAt}
                </div>
              </div>
              <div className={s.coment__text}>{comment.text}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className={s.post}>
          {(comments.comment.commentsData.items ?? [])
            .filter(
              (comments) => comments.user._id === localStorage.getItem("id")
            )
            .map((comment) => (
              <div key={comment._id} className={s.coment}>
                <div className={s.headerContainer}>
                  <div className={s.headerContainer__header}>
                    {comment.user.fullName}
                  </div>
                  <div className={s.headerContainer__date}>
                    {comment.createdAt}
                  </div>
                </div>
                <div className={s.text}>
                  <textarea
                    onChange={(e) => setEditingText(e.target.value)}
                    className={s.text__textarea}
                  >
                    {comment.text}
                  </textarea>
                </div>
                <button
                  onClick={() => onChangeText(editingText, comment._id)}
                  className={s.btnEditing}
                >
                  Исправить
                </button>
                <button
                  onClick={() => clickBtnDelete(comment._id)}
                  className={s.btnDelet}
                >
                  Удалить
                </button>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Comments;
