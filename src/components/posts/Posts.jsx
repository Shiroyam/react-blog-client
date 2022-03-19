import s from "./posts.module.scss"
import React from "react";
import views from "./../../assets/png/views.png";
import { useSelector, useDispatch } from "react-redux";
import { getPost } from "../../redux/posts/action";
import { openPost } from "../../redux/posts/actionOpenPost";
import { NavLink } from "react-router-dom";
import { switchTogglePosts } from "../../redux/profile/action";

const Posts = () => {
    const {pathname} = window.location
    const id = pathname.slice(6)
    const dispatch = useDispatch();
    const data = useSelector((state) => state);
    const posts = data.post.items;
    
    React.useEffect(() => {
        dispatch(getPost(1, ''));
        dispatch(switchTogglePosts())
      }, []);

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
                className={ post._id == id ?  `${s.article} ${s.border}` : `${s.article}`}
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
  );
};

export default Posts;