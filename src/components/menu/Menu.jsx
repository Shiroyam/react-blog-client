import React from "react";

import menuIcon from "./../../assets/png/menuIcon.png"
import "./menu.scss";

const Menu = () => {
  return (
    <>
      <div className="menu">
        <div className="menu__content">
        <div className="menu__header">Меню</div>
        <div>
            <img  className="menu__icon" src={menuIcon}></img>
        </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
