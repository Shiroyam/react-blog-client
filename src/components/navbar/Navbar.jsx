import React, { useEffect } from "react";
import s from "./navbar.module.scss";
import searchIcon from "./../../assets/png/search.png";
import userIcon from "./../../assets/png/user.png";
import createIcon from "./../../assets/png/createPng.png";
import closeSearchPng from "./../../assets/png/VectorcloseSerach.png";
import Pogination from "./../pogination/Pogination";
import Posts from "./../posts/Posts";
import { useDispatch, useSelector } from "react-redux";
import { closeProfile } from "../../redux/profile/action";
import { closeSearch, openSearch } from "../../redux/search/action";
import { openFormAuth } from "../../redux/authorization/action";
import { Link } from "react-router-dom";
import { valueSearch } from "../../redux/search/action";

const Navbar = () => {
  const flag = useSelector((state) => state.search.flag);
  const profile = useSelector((state) => state.profile.flag);
  const dispatch = useDispatch();
  return (
    <>
      <div className={profile ? `${s.navbar}` : `${s.navbar} ${s.right}`}>
        {!profile ? (
          <div className={s.content}>
            {flag && <div className={s.content__header}>VASYA BLOG</div>}
            <div className={s.icon}>
              {flag ? (
                <>
                  {!profile && (
                    <img
                      onClick={() => dispatch(openSearch())}
                      src={searchIcon}
                      className={s.icon__searchIcon}
                    ></img>
                  )}
                  {localStorage.getItem("token") && (
                    <Link to="/createpage">
                      <img
                        onClick={() => dispatch(closeProfile())}
                        src={createIcon}
                        className={s.icon__createIcon}
                      ></img>
                    </Link>
                  )}
                  {!localStorage.getItem("token") ? (
                    <img
                      onClick={() => dispatch(openFormAuth())}
                      src={userIcon}
                      className={s.icon__userIcon}
                    ></img>
                  ) : (
                    <Link to="/profile">
                      <img src={userIcon} className={s.icon__userIcon}></img>
                    </Link>
                  )}
                </>
              ) : (
                <>
                  <input
                    className={s.searchInput}
                    placeholder="Поиск статьи по заголовку или тексту..."
                    type="text"
                    onChange={(e) => dispatch(valueSearch(e.target.value))}
                  ></input>
                  <img
                    onClick={() => dispatch(closeSearch())}
                    className={s.searchClose}
                    src={closeSearchPng}
                  />
                </>
              )}
            </div>
          </div>
        ) : (
          <div className={s.contentOpen}>
            {flag && <div className={s.contentOpen__header}>VASYA BLOG</div>}
            <div className={s.icon}>
              {flag ? (
                <>
                  {!profile && (
                    <img
                      onClick={() => dispatch(openSearch())}
                      src={searchIcon}
                      className={s.icon__searchIcon}
                    ></img>
                  )}
                  {localStorage.getItem("token") && (
                    <Link to="/createpage">
                      <img
                        onClick={() => dispatch(closeProfile())}
                        src={createIcon}
                        className={s.icon__createIcon}
                      ></img>
                    </Link>
                  )}
                </>
              ) : (
                <>
                  <input
                    className={s.searchInput}
                    placeholder="Поиск статьи по заголовку или тексту..."
                    type="text"
                  ></input>
                  <img
                    onClick={() => dispatch(closeSearch())}
                    className={s.searchClose}
                    src={closeSearchPng}
                  />
                </>
              )}
            </div>
          </div>
        )}
        {!profile && <Posts></Posts>}
        {!profile && <Pogination></Pogination>}
      </div>
    </>
  );
};

export default Navbar;
