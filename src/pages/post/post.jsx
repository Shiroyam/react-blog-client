import s from "./post.module.scss";
import React from "react";
import views from "./../../assets/png/views.png";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { openPost } from "../../redux/posts/actionOpenPost";
import { postComments} from "../../redux/comments/action";
import { closeProfile } from "../../redux/profile/action";
import Comments from "../../components/comments/comments";
import { getComments } from "../../redux/comments/action";

const Post = () => {
  const dispatch = useDispatch();
  const [text, setText] = React.useState("");
  const { id } = useParams();
  const postResp = useSelector((state) => state);
  const post = postResp.open;
 
  React.useEffect(() => {
    dispatch(openPost(id));
    dispatch(getComments(id))
    dispatch(closeProfile())
  }, [id]);

  const postComment = async (text, id) => {
    dispatch(postComments(text, id));
    window.location.reload();
  };

  return (
    <div className={s.post}>
      <div
        style={{ backgroundImage: `url(${post.photoUrl})` }}
        className={s.post__headerContainer}
      >
        <div className={s.post__dateContainer}>
          <div className={s.post__date}>{post.updatedAt.slice(0,9)} в {post.updatedAt.slice(11,16)}</div>
          <div className={s.post__viewsContent}>
            <img className={s.post__viewsIcon} src={views}></img>
          <div className={s.post__views}>{post.views}</div>
          </div>
  
        </div>
        <p className={s.post__header}>{post.title}</p>
        <p className={s.post_discription}>{post.description}</p>
      </div>
      <div className={s.post__content}>
        <div className={s.post__textContainer}>
          <p className={s.post__text}>{post.text !== undefined ? post.text : ""}</p>
        </div>
        <div className={s.post__commentsContainer}>
          <Comments></Comments>
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
