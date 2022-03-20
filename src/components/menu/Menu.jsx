import React from "react";
import "./menu.scss";
import closeSearchPng from "./../../assets/png/VectorcloseSerach.png";
import menuIcon from "./../../assets/png/menuIcon.png";
import { useDispatch } from "react-redux";
import { openProfile, closeProfile } from "../../redux/profile/action";
import { openFormAuth } from "../../redux/authorization/action";
import { openFormReg } from "../../redux/registration/regAction";
import { closeSearch } from "../../redux/search/action";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  const [openCloseMenu, setOpenCloseMenu] = React.useState(false);
  const clickMenu = () => {
    setOpenCloseMenu(true);
    dispatch(closeSearch());
  };
  const dispatch = useDispatch();

  const clearLocalStorage = () => {
    localStorage.clear();
    document.location.reload();
  };

  return (
    <>
      <div className="menu">
        {openCloseMenu ? (
          <>
            <div className="menuOpen">
              {localStorage.getItem("token") ? (
                <>
                  <div className="header">
                    <div className="header__name">
                      {window.localStorage.getItem("name")}
                    </div>
                  </div>
                  <div className="nav">
                    <NavLink
                      onClick={() => dispatch(closeProfile())}
                      className="nav__main"
                      style={{ textDecoration: "none" }}
                      to="/"
                    >
                      Главная
                    </NavLink>
                    <NavLink
                      onClick={() => dispatch(openProfile())}
                      className="nav__myProfile"
                      style={{ textDecoration: "none" }}
                      to="/profile"
                    >
                      Мой профиль
                    </NavLink>
                    <NavLink
                      onClick={() => dispatch(closeProfile())}
                      className="nav__createPage"
                      style={{ textDecoration: "none" }}
                      to="/createPage"
                    >
                      Создать запись
                    </NavLink>
                    <div
                      onClick={clearLocalStorage}
                      className="nav__exit"
                      style={{ textDecoration: "none" }}
                    >
                      Выйти
                    </div>
                  </div>
                </>
              ) : (
                <div className="nav">
                  <NavLink
                    onClick={() => dispatch(closeProfile())}
                    className="nav__main"
                    style={{ textDecoration: "none" }}
                    to="/"
                  >
                    Главная
                  </NavLink>
                  <div
                    onClick={() => dispatch(openFormReg())}
                    className="nav__main"
                    style={{ textDecoration: "none" }}
                  >
                    Зарегистрироваться?
                  </div>
                  <Link
                    to="/"
                    onClick={() => dispatch(openFormAuth())}
                    className="nav__main"
                    style={{ textDecoration: "none" }}
                  >
                    Войти
                  </Link>
                </div>
              )}
              <div className="closeMenu">
                <div className="content">
                  <img
                    onClick={() => setOpenCloseMenu(false)}
                    src={closeSearchPng}
                    className="content__closeIcon"
                  />
                  <div className="content__menu">Меню</div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="content">
            <div className="content__header">Меню</div>
            <div>
              <img
                onClick={clickMenu}
                className="content__icon"
                src={menuIcon}
              ></img>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Menu;
