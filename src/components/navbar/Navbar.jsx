import React from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./navbar.module.scss";
import searchIcon from "./../../assets/png/search.png";
import userIcon from "./../../assets/png/user.png";
import createIcon from "./../../assets/png/createPng.png";
import closeSearchPng from "./../../assets/png/VectorcloseSerach.png";
import { closeSearch, openSearch } from "../../redux/search/action";
import { openForm } from "../../redux/regModal/action";
import { Link } from "react-router-dom";

const Navbar = () => {
  const flag = useSelector((state) => state.search.flag);
  const dispatch = useDispatch();

  const closeSearchForm = () => {
    dispatch(closeSearch());
  };

  const openSearchForm = () => {
    dispatch(openSearch());
  };

  const openRegistration = () => {
    dispatch(openForm());
  };
  return (
    <>
      <div className={s.navbar}>
        <div className={s.navbar__content}>
          {flag && <div className={s.navbar__header}>VASYA BLOG</div>}
          <div className={s.menu__icon}>
            {flag ? (
              <>
                <img
                  onClick={openSearchForm}
                  src={searchIcon}
                  className={s.menu__searchIcon}
                ></img>
                {localStorage.getItem("token") && (
                  <Link to="/createpage"><img src={createIcon} className={s.menu__createIcon}></img></Link>
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
                  alt=""
                />
              </>
            )}
          </div>
        </div>
        <div className={s.article}>
          <div className={s.article__content}>
            <div className={s.article__textContent}>
              <div className={s.article__header}>
                JavaScript: Как с помощью Data определить город по IP?
              </div>
              <div className={s.article__discription}>
                На работе потребовалось запилить задачу для автоматического
                определения города при совершении заказа. Было решено сделать
                это на фронте, ибо бек был занят.
              </div>
              <div className={s.article__date}>12 августа 2019 в 08:06</div>
            </div>
          </div>
        </div>
        <div className={s.article}>
          <div className={s.article__content}>
            <div className={s.article__textContent}>
              <div className={s.article__header}>
                JavaScript: Как с помощью Data определить город по IP?
              </div>
              <div className={s.article__discription}>
                На работе потребовалось запилить задачу для автоматического
                определения города при совершении заказа. Было решено сделать
                это на фронте, ибо бек был занят.
              </div>
              <div className={s.article__date}>12 августа 2019 в 08:06</div>
            </div>
            <div className={s.article__imgContent}>
              <img
                className={s.article__img}
                src="https://i.ibb.co/xgt0xX2/postPng0.png"
              />
            </div>
          </div>
        </div>
        <div className={s.article}>
          <div className={s.article__content}>
            <div className={s.article__textContent}>
              <div className={s.article__header}>
                JavaScript: Как с помощью Data определить город по IP?
              </div>
              <div className={s.article__discription}>
                На работе потребовалось запилить задачу для автоматического
                определения города при совершении заказа. Было решено сделать
                это на фронте, ибо бек был занят.
              </div>
              <div className={s.article__date}>12 августа 2019 в 08:06</div>
            </div>
          </div>
        </div>
        <div className={s.article}>
          <div className={s.article__content}>
            <div className={s.article__textContent}>
              <div className={s.article__header}>
                JavaScript: Как с помощью Data определить город по IP?
              </div>
              <div className={s.article__discription}>
                На работе потребовалось запилить задачу для автоматического
                определения города при совершении заказа. Было решено сделать
                это на фронте, ибо бек был занят.
              </div>
              <div className={s.article__date}>12 августа 2019 в 08:06</div>
            </div>
            <div className={s.article__imgContent}>
              <img
                className={s.article__img}
                src="https://i.ibb.co/xgt0xX2/postPng0.png"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
