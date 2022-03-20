import s from "./comments.module.scss";
import React from "react";
import { useSelector } from "react-redux";
import { deleteComment, editingComment } from "../../redux/comments/action";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

const Comments = () => {
  const [editingText, setEditingText] = React.useState('')
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);
  const toggleSwitcher = useSelector((state) => state.profile.toggleSwitcher);
  const {
    register,
    formState: { errors},
    handleSubmit,
  } = useForm({
    mode:"onBlur"
  });
  const clickBtnDelete = (id) => {
    dispatch(deleteComment(id));
    window.location.reload();
  };
  
  const onChangeText = (data, id) => {
    dispatch(editingComment(data, id))
  }

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
                <div className={s.post__text}>
                  <textarea  onChange={(e)=>setEditingText(e.target.value)} className={s.post__textarea}>
                  {comment.text}
                  </textarea>
                </div>
                <button onClick={()=>onChangeText(editingText,comment._id )} className={s.post__btnEditing}>Исправить</button>
                <button
                  onClick={() => clickBtnDelete(comment._id)}
                  className={s.post__btnDelet}
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
