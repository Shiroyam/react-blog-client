import s from "./post.module.scss";

const Post = () => {
  return (
    <div className={s.post}>
      <div className={s.post__headerContainer}>
        <div className={s.post__dateContainer}>
          <div className={s.post__date}>12 августа 2019 в 08:06</div>
          <div className={s.post__views}></div>
        </div>
        <p className={s.post__header}>Какой-то очень интересный заголовок</p>
        <p className={s.post_discription}>
          Я часто замечаю, что начинающие фронтенд-разработчики по несколько раз
          то начинают, то забрасывают изучение технологий.
        </p>
      </div>
      <div className={s.post__content}>
        <div className={s.post__textContainer}>
          <p className={s.post__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            scelerisque diam arcu risus. Imperdiet dolor, porttitor pellentesque
            fringilla aliquet sit. Turpis arcu vitae quis nunc suscipit. Mattis
            scelerisque leo curabitur faucibus. Nec, sed porta ac enim. Mattis
            quam accumsan ipsum commodo sed purus mi. Platea sit lectus neque,
            nulla sapien vitae nulla. Nisl viverra viverra quis mattis tincidunt
            laoreet amet, laoreet proin. Duis mi, aliquam tincidunt amet
            phasellus malesuada non nisi.
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
        </div>
      </div>
    </div>
  );
};

export default Post;
