import s from "./profile.module.scss";
import React from "react";
import views from "./../../assets/png/views.png";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { openPost } from "../../redux/posts/actionOpenPost";
import { getPost } from "../../redux/posts/action";
import { closeProfile } from "../../redux/profile/action";
import { profileComments } from "../../redux/profile/action";
import { openProfile } from "../../redux/profile/action";

const Profile = () => {
  const data = useSelector((state) => state);
  const comment = useSelector((state) => state.profile)
  console.log(comment)
  const [switchToggle, setSwtitchToggle] = React.useState(true);
  const posts = data.post.items;
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getPost());
    dispatch(openProfile())
  }, []);
  const togglePosts = () => {
    setSwtitchToggle(true);
  };
  const toggleComments = () => {
    setSwtitchToggle(false);
    dispatch(profileComments());
  };
  return (
    <>
      <div className={s.profile}>
        <div className={s.profile__content}>
          <div className={s.profile__headerContent}>
            <div className={s.profile__header}>
              {window.localStorage.getItem("name")}
            </div>
          </div>
          <div className={s.profile__line}></div>
          <div className={s.profile__toggleContent}>
            <div
              onClick={togglePosts}
              className={
                switchToggle
                  ? `${s.profile__toggleArticle} ${s.active}`
                  : `${s.profile__toggleArticle}`
              }
            >
              Статьи
            </div>
            <div
              onClick={toggleComments}
              className={
                !switchToggle
                  ? `${s.profile__toggleComment} ${s.active}`
                  : `${s.profile__toggleComment}`
              }
            >
              Комментарии
            </div>
          </div>
        </div>
        {switchToggle ? (
          <>
            {(posts ?? []).map((post) => (
              <NavLink
                key={post._id}
                to={`/post/${post._id}`}
                style={{ textDecoration: "none" }}
                onClick={() => dispatch(closeProfile())}
              >
                <div
                  onClick={() => dispatch(openPost(post._id))}
                  className={s.article}
                >
                  <div className={s.article__content}>
                    <div className={s.article__textContent}>
                      <div className={s.article__header}>{post.title}</div>
                      <div className={s.article__discription}>
                        {post.description}
                      </div>
                      <div className={s.article__dateContainer}>
                        <div className={s.article__date}>{post.updatedAt}</div>
                        <img className={s.article__viewsIcon} src={views} />
                        <div className={s.article__views}>{post.views}</div>
                      </div>
                    </div>
                    <div className={s.article__imgContent}>
                      {post.photoUrl === "" ? (
                        <div />
                      ) : (
                        <img className={s.article__img} src={post.photoUrl} />
                      )}
                    </div>
                  </div>
                </div>
              </NavLink>
            ))}
          </>
        ):(comment.comments.items ?? []).map((comment) => (
          <div key={comment._id} className={s.post__coment}>
            <div className={s.post__headerComment}>
              <div className={s.post__header}>{comment.user.fullName}</div>
              <div className={s.post__date}>{comment.createdAt}</div>
            </div>
            <div className={s.post__text}>{comment.text}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Profile;
