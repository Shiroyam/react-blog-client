import s from "./main.module.scss";
import React from "react";
import VasyPupkin from "./../../assets/png/VasyPupkin.png";

const Main = () => {
  return (
    <div className={s.main}>
      <div className={s.headerContent}>
        <div className={s.headerContent__header}>Vasya Pupkin</div>
        <div className={s.headerContent__description}>
          Блог фронтенд-разработчика
        </div>
      </div>
      <img className={s.img} src={VasyPupkin}></img>
      <div className={s.content}>
        <div className={s.content__about}>Обо мне</div>
        <div className={s.content__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          scelerisque diam arcu risus. Imperdiet dolor, porttitor pellentesque
          fringilla aliquet sit. Turpis arcu vitae quis nunc suscipit. Mattis
          scelerisque leo curabitur faucibus. Nec, sed porta ac enim. Mattis
          quam accumsan ipsum commodo sed purus mi. Platea sit lectus neque,
          nulla sapien vitae nulla. Nisl viverra viverra quis mattis tincidunt
          laoreet amet, laoreet proin. Duis mi, aliquam tincidunt amet phasellus
          malesuada non nisi.
        </div>
      </div>
    </div>
  );
};

export default Main;
