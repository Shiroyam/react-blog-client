import s from "./post.module.scss";
import React from "react";
import views from "./../../assets/png/views.png";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { openPost } from "../../redux/posts/actionOpenPost";
import { postComments } from "../../redux/comments/action";
import { closeProfile } from "../../redux/profile/action";
import Comments from "../../components/comments/Comments";
import { getComments } from "../../redux/comments/action";

const Post = () => {
  const dispatch = useDispatch();
  const [text, setText] = React.useState("");
  const { id } = useParams();
  const postResp = useSelector((state) => state);
  const post = postResp.open;

  React.useEffect(() => {
    dispatch(openPost(id));
    dispatch(getComments(id));
    dispatch(closeProfile());
  }, [id]);

  const postComment = async (text, id) => {
    dispatch(postComments(text, id));
    window.location.reload();
  };

  return (
    <div className={s.post}>
      <div
        style={{ backgroundImage: `url(${post.photoUrl})` }}
        className={s.headerContainer}
      >
        <div className={s.dateContainer}>
          <div className={s.dateContainer__date}>
            {post.updatedAt && post.updatedAt.slice(0, 9)} в{" "}
            {post.updatedAt && post.updatedAt.slice(11, 16)}
          </div>
          <div className={s.viewsContent}>
            <img className={s.viewsContent__viewsIcon} src={views}></img>
            <div className={s.viewsContent__views}>{post.views}</div>
          </div>
        </div>
        <p className={s.headerContainer__header}>{post.title}</p>
        <p className={s.headerContainer__discription}>{post.description}</p>
      </div>
      <div className={s.content}>
        <div className={s.textContainer}>
          <p className={s.textContainer__text}>
            {post.text !== undefined ? post.text : ""}
          </p>
        </div>
        <div className={s.commentsContainer}>
          <Comments></Comments>
          {window.localStorage.getItem("token") && (
            <div className={s.commentForm}>
              <p className={s.commentForm_commentHeaderForm}>
                Добавить комментарий
              </p>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text"
                className={s.commentForm__commentTextForm}
              ></textarea>
              <div className={s.btnContainer}>
                <button
                  onClick={() => postComment(text, id)}
                  className={s.btnContainer__btnForm}
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
