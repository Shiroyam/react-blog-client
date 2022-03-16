import s from "./profile.module.scss";
import React from "react";

const Profile = () => {
  return (
    <>
      <div className={s.profile}>
        <div className={s.profile__content}>
          <div className={s.profile__headerContent}>
            <div className={s.profile__header}>{window.localStorage.getItem('name')}</div>
          </div>
          <div className={s.profile__line}></div>
          <div className={s.profile__toggleContent}>
            <div className={`${s.profile__toggleArticle} ${s.active}`}>
              Статьи
            </div>
            <div className={`${s.profile__toggleComment}`}>Комментарии</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
