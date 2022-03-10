import s from "./navbar.module.scss";
import searchIcon from "./../../assets/png/search.png";
import userIcon from "./../../assets/png/user.png";

const Navbar = () => {
  return (
    <>
      <div className={s.navbar}>
        <div className={s.navbar__content}>
          <div className={s.navbar__header}>VASYA BLOG</div>
          <div className={s.menu__icon}>
            <img src={searchIcon} className={s.menu__searchIcon}></img>
            <img src={userIcon} className={s.menu__userIcon}></img>
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
