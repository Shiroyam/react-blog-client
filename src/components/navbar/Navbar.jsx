import React from "react";
import s from "./navbar.module.scss";
import searchIcon from "./../../assets/png/search.png";
import userIcon from "./../../assets/png/user.png";
import createIcon from "./../../assets/png/createPng.png";
import closeSearchPng from "./../../assets/png/VectorcloseSerach.png";
import views from "./../../assets/png/views.png";
import { useDispatch, useSelector } from "react-redux";
import { closeProfile } from "../../redux/profile/action";
import { closeSearch, openSearch } from "../../redux/search/action";
import { openForm } from "../../redux/regModal/action";
import { Link, NavLink } from "react-router-dom";
import { getPost } from "../../redux/posts/action";
import { openPost } from "../../redux/posts/actionOpenPost";

const Navbar = () => {
  const flag = useSelector((state) => state.search.flag);
  const profile = useSelector((state) => state.profile.flag);
  const data = useSelector((state) => state);
  const posts = data.post.items;
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPost());
  }, []);
  
  return (
    <>
      <div className={profile ? `${s.navbar}` : `${s.navbar} ${s.right}`}>
        {!profile ? (
          <div className={s.navbar__content}>
            {flag && <div className={s.navbar__header}>VASYA BLOG</div>}
            <div className={s.menu__icon}>
              {flag ? (
                <>
                  {!profile && (
                    <img
                      onClick={()=>dispatch(openSearch())}
                      src={searchIcon}
                      className={s.menu__searchIcon}
                    ></img>
                  )}
                  {localStorage.getItem("token") && (
                    <Link to="/createpage">
                      <img
                        onClick={() =>dispatch(closeProfile())}
                        src={createIcon}
                        className={s.menu__createIcon}
                      ></img>
                    </Link>
                  )}
                  {!localStorage.getItem("token") && (
                    <img
                      onClick={()=>dispatch(openForm())}
                      src={userIcon}
                      className={s.menu__userIcon}
                    ></img>
                  )}
                </>
              ) : (
                <>
                  <input
                    className={s.menu__searchInput}
                    placeholder="Поиск статьи по заголовку или тексту..."
                    type="text"
                  ></input>
                  <img
                    onClick={()=>dispatch(closeSearch())}
                    className={s.menu__searchClose}
                    src={closeSearchPng}
                  />
                </>
              )}
            </div>
          </div>
        ) : (
          <div className={s.navbar__content__open}>
            {flag && <div className={s.navbar__header}>VASYA BLOG</div>}
            <div className={s.menu__icon}>
              {flag ? (
                <>
                  {!profile && (
                    <img
                      onClick={()=>dispatch(openSearch())}
                      src={searchIcon}
                      className={s.menu__searchIcon}
                    ></img>
                  )}
                  {localStorage.getItem("token") && (
                    <Link to="/createpage">
                      <img
                        onClick={() =>dispatch(closeProfile())}
                        src={createIcon}
                        className={s.menu__createIcon}
                      ></img>
                    </Link>
                  )}
                </>
              ) : (
                <>
                  <input
                    className={s.menu__searchInput}
                    placeholder="Поиск статьи по заголовку или тексту..."
                    type="text"
                  ></input>
                  <img
                    onClick={()=>dispatch(closeSearch())}
                    className={s.menu__searchClose}
                    src={closeSearchPng}
                  />
                </>
              )}
            </div>
          </div>
        )}
        {!profile && (
          <>
            {(posts ?? []).map((post) => (
              <NavLink
                key={post._id}
                to={`/post/${post._id}`}
                style={{ textDecoration: "none" }}
              >
                <div onClick={() => dispatch(openPost(post._id))} className={s.article}>
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
        )}
      </div>
    </>
  );
};

export default Navbar;
