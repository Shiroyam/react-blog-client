import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openProfile, closeProfile } from "../../redux/profile/action";
import closeSearchPng from "./../../assets/png/VectorcloseSerach.png";
import menuIcon from "./../../assets/png/menuIcon.png";
import "./menu.scss";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const [openCloseMenu, setOpenCloseMenu] = React.useState(false);
  const dispatch = useDispatch();

  const clearLocalStorage = () => {
    localStorage.clear();
  };

  const oProfile = () => {
    dispatch(openProfile());
  };

  const cProfile = () => {
    dispatch(closeProfile());
  };
  return (
    <>
      <div className="menu">
        {openCloseMenu ? (
          <div className="menuOpen">
            <div className="menuOpen__header">
              <div className="menuOpen__name">Вася Пупкин</div>
              <div className="menuOpen__date">
                Дата регистрации: 12 августа 2019 в 08:06
              </div>
            </div>
            <div className="menuOpen__nav">
              <NavLink
                onClick={cProfile}
                className="menuOpen__main"
                style={{ textDecoration: "none" }}
                to="/"
              >
                Главная
              </NavLink>
              <NavLink
                onClick={oProfile}
                className="menuOpen__myProfile"
                style={{ textDecoration: "none" }}
                to="/profile"
              >
                Мой профиль
              </NavLink>
              <NavLink
                onClick={cProfile}
                className="menuOpen__createPage"
                style={{ textDecoration: "none" }}
                to="/createPage"
              >
                Создать запись
              </NavLink>
              <div
                onClick={clearLocalStorage}
                className="menuOpen__exit"
                style={{ textDecoration: "none" }}
                to="/createPage"
              >
                Выйти
              </div>
            </div>
            <div className="menuOpen__closeMenu">
              <div className="menuOpen__content">
                <img
                  onClick={() => setOpenCloseMenu(false)}
                  src={closeSearchPng}
                  className="menuOpen__closeIcon"
                />
                <div className="menuOpen__menu">Меню</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="menu__content">
            <div className="menu__header">Меню</div>
            <div>
              <img
                onClick={() => setOpenCloseMenu(true)}
                className="menu__icon"
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
