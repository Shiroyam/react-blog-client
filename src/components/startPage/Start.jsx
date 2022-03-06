import React from "react";
import mainPng from "./../../assets/png/unsplash_Z-bgD8pMv30.png";
import "./start.scss";

const Start = () => {
  return (
    <>
      <div className="mainPage">
        <div className="headerBlock">
          <div className="headerBlock__header">Vasya Pupkin</div>
          <div className="headerBlock__discription">
            Блог фронтенд-разработчика
          </div>
        </div>
        <img src={mainPng} alt="" />
        <div className="text">
          <div className="text__header">Обо мне</div>
          <div className="text__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            scelerisque diam arcu risus. Imperdiet dolor, porttitor pellentesque
            fringilla aliquet sit. Turpis arcu vitae quis nunc suscipit. 
          </div>
        </div>
      </div>
    </>
  );
};

export default Start;
