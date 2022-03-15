import React from "react";
import { instance } from "../../config/axios";
import { useDispatch, useSelector } from "react-redux";
import s from "./navbar.module.scss";
import searchIcon from "./../../assets/png/search.png";
import userIcon from "./../../assets/png/user.png";
import createIcon from "./../../assets/png/createPng.png";
import closeSearchPng from "./../../assets/png/VectorcloseSerach.png";
import views from "./../../assets/png/views.png";
import { closeProfile } from "../../redux/profile/action";
import { closeSearch, openSearch } from "../../redux/search/action";
import { openForm } from "../../redux/regModal/action";
import { Link } from "react-router-dom";
import { getPost } from "../../redux/post/action";

const Navbar = () => {
  const flag = useSelector((state) => state.search.flag);
  const profile = useSelector((state) => state.profile.flag);
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const posts = data.post.items;
  console.log(posts);

  React.useEffect(() => {
    dispatch(getPost());
  });

  const cProfile = () => {
    dispatch(closeProfile());
  };

  const closeSearchForm = () => {
    dispatch(closeSearch());
  };

  const openSearchForm = () => {
    dispatch(openSearch());
  };

  const openRegistration = () => {
    dispatch(openForm());
    dispatch(getPost());
  };
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
                      onClick={openSearchForm}
                      src={searchIcon}
                      className={s.menu__searchIcon}
                    ></img>
                  )}
                  {localStorage.getItem("token") && (
                    <Link to="/createpage">
                      <img
                        onClick={cProfile}
                        src={createIcon}
                        className={s.menu__createIcon}
                      ></img>
                    </Link>
                  )}
                  <img
                    onClick={openRegistration}
                    src={userIcon}
                    className={s.menu__userIcon}
                  ></img>
                </>
              ) : (
                <>
                  <input
                    className={s.menu__searchInput}
                    placeholder="Поиск статьи по заголовку или тексту..."
                    type="text"
                  ></input>
                  <img
                    onClick={closeSearchForm}
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
                      onClick={openSearchForm}
                      src={searchIcon}
                      className={s.menu__searchIcon}
                    ></img>
                  )}
                  {localStorage.getItem("token") && (
                    <Link to="/createpage">
                      <img
                        onClick={cProfile}
                        src={createIcon}
                        className={s.menu__createIcon}
                      ></img>
                    </Link>
                  )}
                  <img
                    onClick={openRegistration}
                    src={userIcon}
                    className={s.menu__userIcon}
                  ></img>
                </>
              ) : (
                <>
                  <input
                    className={s.menu__searchInput}
                    placeholder="Поиск статьи по заголовку или тексту..."
                    type="text"
                  ></input>
                  <img
                    onClick={closeSearchForm}
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
            {posts.map((post) => (
              <div className={s.article}>
                <div id={post.id} className={s.article__content}>
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
                    <img className={s.article__img} src={post.photoUrl} />
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
