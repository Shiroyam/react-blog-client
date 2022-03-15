import React from "react";
import s from "./create.module.scss";
import loading from "./../../assets/png/GroupLoading.png";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Create = () => {
  return (
    <div className={s.create}>
      <div className={s.header}>
        <input
          className={s.header__input}
          placeholder="Введите заголовок..."
          type="text"
        />
      </div>
      <div className={s.description}>
        <div className={s.description__header}>Короткое описание</div>
        <textarea className={s.description__input}></textarea>
      </div>
      <div className={s.formLink}>
        <div className={s.formLink__header}>Ссылка на изображение:</div>
        <input type="text" className={s.formLink__form} />
        <button className={s.formLink__button}>
          <img src={loading} width={16} className={s.formLink__icon}></img>
          Загрузить
        </button>
      </div>
      <div className={s.textForm}>
        <div className={s.textForm__header}>Полное описание</div>
        <CKEditor className={s.textForm__text} editor={ClassicEditor} />
      </div>
      <button className={s.btnPost}>Опубликовать</button>
    </div>
  );
};

export default Create;
