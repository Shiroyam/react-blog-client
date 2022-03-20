import React from "react";
import s from "./create.module.scss";
import loading from "./../../assets/png/GroupLoading.png";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createPost, editingPost } from "../../redux/createPost/action";
import { getPost } from "../../redux/posts/action";
import { useParams } from "react-router-dom";

const Create = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { pathname } = window.location;
  const postResp = useSelector((state) => state.open);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const submitForm = (data) => {
    id ? dispatch(editingPost(id, data)) : dispatch(createPost(data));
  };

  React.useEffect(() => {
    dispatch(getPost(1, ""));
  }, [id]);

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className={s.create}>
        <div className={s.header}>
          <textarea
            className={s.header__input}
            placeholder="Введите заголовок..."
            {...register("title", {
              required: "Поле обязательно!",
              minLength: {
                value: 6,
                message: "Нужно ввести минимум 6 символа!",
              },
              maxLength: {
                value: 28,
                message: "Вы ввели максимальное допустимое число символов",
              },
            })}
            type="text"
          >
            {id && postResp.title}
          </textarea>
        </div>
        <div className={s.description}>
          <div className={s.description__header}>Короткое описание</div>
          <textarea
            {...register("description", {
              required: "Поле обязательно!",
              minLength: {
                value: 6,
                message: "Нужно ввести минимум 6 символа!",
              },
              maxLength: {
                value: 24,
                message: "Вы ввели максимальное допустимое число символов",
              },
            })}
            className={s.description__input}
          >
            {id && postResp.description}
          </textarea>
        </div>
        <div className={s.formLink}>
          <div className={s.formLink__container}>
            <div className={s.formLink__header}>Ссылка на изображение:</div>
            <textarea
              type="text"
              className={s.formLink__form}
              {...register("photoUrl", {
                required: "Поле обязательно!",
                minLength: {
                  value: 6,
                  message: "Нужно ввести минимум 6 символа!",
                },
              })}
            >
              {id && postResp.photoUrl}
            </textarea>
          </div>

          <button className={s.formLink__button}>
            <img src={loading} width={16} className={s.formLink__icon}></img>
            Загрузить
          </button>
        </div>
        <div className={s.textForm}>
          <div className={s.textForm__header}>Полное описание</div>
          <textarea
            {...register("text", {
              required: "Поле обязательно!",
              minLength: {
                value: 6,
                message: "Нужно ввести минимум 6 символа!",
              },
            })}
            className={s.textForm__text}
          >
            {id && postResp.text}
          </textarea>
        </div>
        {pathname == "/createPage" ? (
          <button type="submit" className={s.btnPost}>
            Опубликовать
          </button>
        ) : (
          <button type="submit" className={s.btnPost}>
            Изменить
          </button>
        )}
      </div>
    </form>
  );
};

export default Create;
