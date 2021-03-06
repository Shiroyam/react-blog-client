import s from "./posts.module.scss";
import React from "react";
import views from "./../../assets/png/views.png";
import { useSelector, useDispatch } from "react-redux";
import { getPost } from "../../redux/posts/action";
import { openPost } from "../../redux/posts/actionOpenPost";
import { NavLink, Link } from "react-router-dom";
import { switchTogglePosts } from "../../redux/profile/action";
import { deletePost } from "../../redux/editing/action";
import { closeProfile } from "../../redux/profile/action";

const Posts = () => {
  const { pathname } = window.location;
  const id = pathname.slice(6);
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const posts = data.post.items;

  const ClickBtnEditing = (id) => {
    dispatch(openPost(id));
    dispatch(closeProfile());
  };

  const ClickBtnDelet = (id) => {
    dispatch(deletePost(id));
    window.location.reload();
  };

  React.useEffect(() => {
    dispatch(getPost(1, ""));
    dispatch(switchTogglePosts());
  }, [id]);

  return (
    <>
      {(posts ?? []).map((post) => (
        <NavLink
          key={post._id}
          to={`/post/${post._id}`}
          style={{ textDecoration: "none" }}
          className={s.link}
        >
          <div
            onClick={() => dispatch(openPost(post._id))}
            className={
              post._id == id ? `${s.article} ${s.border}` : `${s.article}`
            }
          >
            <div className={s.content}>
              <div className={s.textContent}>
                <div className={s.textContent__header}>{post.title}</div>
                <div className={s.textContent__discription}>
                  {post.description}
                </div>
                <div className={s.textContent__dateContainer}>
                  <div className={s.date}>
                    {post.updatedAt.slice(0, 9)} в{" "}
                    {post.updatedAt.slice(11, 16)}
                  </div>
                  <img className={s.viewsIcon} src={views} />
                  <div className={s.views}>{post.views}</div>
                </div>
                {localStorage.getItem("id") == post.user._id && (
                  <>
                    {pathname == "/profile" && (
                      <>
                        <div className={s.btn}>
                          <Link to={`/createpage/editing/${post._id}`}>
                            <button
                              onClick={() => ClickBtnEditing(post._id)}
                              className={s.btn__btnRedact}
                            >
                              Редактировать
                            </button>
                          </Link>
                          <button
                            onClick={() => ClickBtnDelet(post._id)}
                            className={s.btn__btnDelet}
                          >
                            Удалить
                          </button>
                        </div>
                      </>
                    )}{" "}
                  </>
                )}
              </div>
              <div className={s.imgContent}>
                {post.photoUrl === "" ? (
                  <div />
                ) : (
                  <img className={s.imgContent__img} src={post.photoUrl} />
                )}
              </div>
            </div>
          </div>
        </NavLink>
      ))}
    </>
  );
};

export default Posts;
