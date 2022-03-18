import React from "react";
import s from "./create.module.scss";
import loading from "./../../assets/png/GroupLoading.png";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/createPost/action";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Create = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [photoUrl, setPhotoUrl] = React.useState('https://sun9-54.userapi.com/impg/JFJs9at3_7HPI8MAaAOTg_rfKmt50SqBStDvBg/B7jn157A_lE.jpg?size=1280x800&quality=95&sign=4515ac6f6b0a6871fdcaf8cde1941b7f&type=album')
  const [text, setText] = React.useState('')

  const postPost = (title, photoUrl, description, text) => {
    dispatch(createPost(title, photoUrl, description,text ))
    window.location.reload()
  }

  const handelChange = (e,editor) => {
    const data = editor.getData()
    setText(data)
  }

  return (
    <div className={s.create}>
      <div className={s.header}>
        <input
          className={s.header__input}
          placeholder="Введите заголовок..."
          type="text"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />
      </div>
      <div className={s.description}>
        <div className={s.description__header}>Короткое описание</div>
        <textarea value={description} onChange={(e)=>setDescription(e.target.value)} className={s.description__input}></textarea>
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
        <CKEditor data={text} onChange={handelChange} className={s.textForm__text} editor={ClassicEditor} />
      </div>
      <button onClick={()=>postPost(title, photoUrl, description, text)} className={s.btnPost}>Опубликовать</button>
    </div>
  );
};

export default Create;
