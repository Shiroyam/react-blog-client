import s from "./profile.module.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchToggleComments, switchTogglePosts } from "../../redux/profile/action";
import { openProfile } from "../../redux/profile/action";
import { getComment } from "../../redux/comments/action";
import Posts from "./../../components/posts/Posts.jsx";
import Comments from "../../components/comments/comments";
import Pogination from "../../components/pogination/Pogination";

const Profile = () => {
  const toggleSwitcher = useSelector((state)=> state.profile.toggleSwitcher)
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(openProfile());
    dispatch(getComment());
  }, []);

  return (
    <>
      <div className={s.profile}>
        <div className={s.profile__content}>
          <div className={s.profile__headerContent}>
            <div className={s.profile__header}>
              {window.localStorage.getItem("name")}
            </div>
          </div>
          <div className={s.profile__line}></div>
          <div className={s.profile__toggleContent}>
            <div
              onClick={()=>dispatch(switchTogglePosts())}
              className={
                toggleSwitcher
                  ? `${s.profile__toggleArticle} ${s.active}`
                  : `${s.profile__toggleArticle}`
              }
            >
              Статьи
            </div>
            <div
              onClick={()=>dispatch(switchToggleComments())}
              className={
                !toggleSwitcher
                  ? `${s.profile__toggleComment} ${s.active}`
                  : `${s.profile__toggleComment}`
              }
            >
              Комментарии
            </div>
          </div>
        </div>
        {toggleSwitcher ? (
          <>
            <Posts></Posts>
            <Pogination></Pogination>
          </>
        ) : (
          <>
            <Comments></Comments>
            <Pogination></Pogination>
          </>
        )}
      </div>
    </>
  );
};

export default Profile;
