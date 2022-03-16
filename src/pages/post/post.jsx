import s from "./post.module.scss";
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { openPost } from "../../redux/posts/actionOpenPost";
import { postComments, getComments } from "../../redux/comments/action";
import { instance } from "../../config/axios";
const Post = () => {
  const dispatch = useDispatch();
  const [text, setText] = React.useState('')
  const { id } = useParams();
  const postResp = useSelector((state) => state);
  const post = postResp.open;
  const comments = useSelector((state)=> state.comments)
  console.log(comments)

  React.useEffect(() => { 
    dispatch(openPost(id));
    dispatch(getComments(id))
  }, [id]);

  const postComment = async (text, id) => {
    dispatch(postComments(text, id))
    window.location.reload()
  }
   
  return (
    <div className={s.post}>
      <div
        style={{ backgroundImage: `url(${post.photoUrl})` }}
        className={s.post__headerContainer}
      >
        <div className={s.post__dateContainer}>
          <div className={s.post__date}>{post.createdAt}</div>
          <div className={s.post__views}>{post.views}</div>
        </div>
        <p className={s.post__header}>{post.title}</p>
        <p className={s.post_discription}>{post.description}</p>
      </div>
      <div className={s.post__content}>
        <div className={s.post__textContainer}>
          <p className={s.post__text}>{post.text}</p>
        </div>
        <div className={s.post__commentsContainer}>
          <div className={s.post__headerComments}>
            <p className={s.post__header}>Комментарии (3)</p>
            <div className={s.post__quantity}></div>
          </div>

          {(comments.response ?? []).map((comment) => (
            <div key={comment._id} className={s.post__coment}>
              <div className={s.post__headerComment}>
                <div className={s.post__header}>{comment.user.fullName}</div>
                <div className={s.post__date}>{comment.createdAt}</div>
              </div>
              <div className={s.post__text}>
               {comment.text}
              </div>
            </div>
          ))}
          {window.localStorage.getItem("token") && (
            <div className={s.post_commentForm}>
              <p className={s.post_commentHeaderForm}>Добавить комментарий</p>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text"
                className={s.post_commentTextForm}
              ></textarea>
              <div className={s.post_btnContainer}>
                <button
                  onClick={() => postComment(text, id)}
                  className={s.post__btnForm}
                >
                  Отправить
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
