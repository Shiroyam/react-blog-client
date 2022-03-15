import s from "./post.module.scss";
import { useSelector } from "react-redux";

const Post = () => {
const data = useSelector((state) => state);


  return (
    <div className={s.post}>
      <div style={{backgroundImage:`url(${data.post.photoUrl})`}} className={s.post__headerContainer}>
        <div  className={s.post__dateContainer}>
          <div className={s.post__date}>12 августа 2019 в 08:06</div>
          <div className={s.post__views}></div>
        </div>
        <p className={s.post__header}>{data.post.title}</p>
        <p className={s.post_discription}>
          {data.post.description}
        </p>
      </div>
      <div className={s.post__content}>
        <div className={s.post__textContainer}>
          <p className={s.post__text}>
          {data.post.text}
          </p>
        </div>
        <div className={s.post__commentsContainer}>
          <div className={s.post__headerComments}>
            <p className={s.post__header}>Комментарии (3)</p>
            <div className={s.post__quantity}></div>
          </div>
          <div className={s.post__coment}>
            <div className={s.post__headerComment}>
              <div className={s.post__header}>Vasya Pupkin</div>
              <div className={s.post__date}>12 августа 2019 в 08:06</div>
            </div>
            <div className={s.post__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
              adipiscing leo id sed neque, diam nibh.
            </div>
          </div>
          <div className={s.post_commentForm}>
            <p className={s.post_commentHeaderForm}>Добавить комментарий</p>
            <textarea type="text" className={s.post_commentTextForm}></textarea>
            <div className={s.post_btnContainer}>
              <button className={s.post__btnForm}>Отправить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
