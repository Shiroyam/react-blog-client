import React from "react";
import s from "./navbar.module.scss";
import searchIcon from "./../../assets/png/search.png";
import userIcon from "./../../assets/png/user.png";
import createIcon from "./../../assets/png/createPng.png";
import closeSearchPng from "./../../assets/png/VectorcloseSerach.png";
import Pogination from "./../pogination/Pogination"
import Posts from "./../posts/Posts";
import { useDispatch, useSelector } from "react-redux";
import { closeProfile } from "../../redux/profile/action";
import { closeSearch, openSearch } from "../../redux/search/action";
import { openFormAuth} from "../../redux/authorization/action";
import { Link} from "react-router-dom";
import { getPost } from "../../redux/posts/action";


const Navbar = () => {
  const flag = useSelector((state) => state.search.flag);
  const profile = useSelector((state) => state.profile.flag);
  const dispatch = useDispatch();
  
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
                      onClick={()=>dispatch(openFormAuth())}
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
        {!profile && (<Posts></Posts>)}
        <Pogination></Pogination>
      </div>
    </>
  );
};

export default Navbar;
