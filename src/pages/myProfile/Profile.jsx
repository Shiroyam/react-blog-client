import s from "./profile.module.scss";
import { useSelector } from "react-redux";
import React from "react";

const Profile = () => {   
    const flag = useSelector((state) => state.profile.flag);
    console.log(flag)
  return (
    <>
      <div className={s.profile}>
        <div className={s.profile__content}>
          <div className={s.profile__headerContent}>
            <div className={s.profile__header}>Вася Пупкин</div>
            <div className={s.profile__date}>
              Дата регистрации: 12 августа 2019 в 08:06
            </div>
          </div>
          <div className={s.profile__line}></div>
          <div className={s.profile__toggleContent}>
            <div className={`${s.profile__toggleArticle} ${s.active}`}>Статьи</div>
            <div className={`${s.profile__toggleComment}`}>Комментарии</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
