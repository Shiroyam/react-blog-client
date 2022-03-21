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
    if (id) {
      dispatch(editingPost(id, data));
      window.location.reload();
    } else {
      dispatch(createPost(data));
      window.location.reload();
    }
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
          <div className={s.header__context}>
            {errors?.title && <p>{errors?.title?.message || "Error!"}</p>}
          </div>
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
                value: 160,
                message: "Вы ввели максимальное допустимое число символов",
              },
            })}
            className={s.description__input}
          >
            {id && postResp.description}
          </textarea>
          <div className={s.description__context}>
            {errors?.description && (
              <p>{errors?.description?.message || "Error!"}</p>
            )}
          </div>
        </div>
        <div className={s.formLink}>
          <div className={s.container}>
            <div>
              <div className={s.container__header}>Ссылка на изображение:</div>
              <textarea
                type="text"
                placeholder="Вставьте URL..."
                className={s.container__form}
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
              <div className={s.container__context}>
                {errors?.photoUrl && (
                  <p>{errors?.photoUrl?.message || "Error!"}</p>
                )}
              </div>
            </div>
            <div className={s.btn}>
              <button disabled className={s.btn__button}>
                <img
                  src={loading}
                  width={16}
                  className={s.formLink__icon}
                ></img>
                Загрузить
              </button>
            </div>
          </div>
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
          <div className={s.textForm__context}>
            {errors?.text && <p>{errors?.text?.message || "Error!"}</p>}
          </div>
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
