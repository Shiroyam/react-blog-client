import React from "react";
import closeSearchPng from "./../../assets/png/VectorcloseSerach.png";
import menuIcon from "./../../assets/png/menuIcon.png";
import "./menu.scss";
import { Link } from "react-router-dom";

const Menu = () => {
  const [openCloseMenu, setOpenCloseMenu] = React.useState(false);
    const { pathname } = window.location;
    console.log(pathname)
  
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
              <div className="menuOpen__nav">
                <Link style={{ textDecoration: "none" }} to="/">
                  <div
                    className={
                      pathname == "/"
                        ? "menuOpen__main active"
                        : "menuOpen__main"
                    }
                  >
                    Главная
                  </div>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/createPage">
                  <div className="menuOpen__myProfile">Мой профиль</div>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/createPage">
                  <div className="menuOpen__createPage">Создать запись</div>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/createPage">
                  <div className="menuOpen__exit">Выйти</div>
                </Link>
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
