import React, { useRef } from 'react';
import { useAppDispatch } from '../../Redux/store';
import { addArticle } from '../../Redux/Reducers/ArticleSlice';

function FormAddArticles(): JSX.Element {
  const articleImg = useRef<HTMLInputElement>(null);
  const articleName = useRef<HTMLInputElement>(null);
  const articleText = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (
      articleImg.current?.files?.length &&
      articleName.current?.value &&
      articleText.current?.value
    ) {
      const file = articleImg.current.files[0];
      const name = articleName.current.value;
      const text = articleText.current.value;

      const formData = new FormData();
      formData.append('file', file);
      formData.append('name', name);
      formData.append('text', text);

      dispatch(addArticle(formData));
      // console.log(file);
    }
  };
  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <label>
          Фото
          <input type="file" name="img" ref={articleImg} required />
        </label>
        <label>
          Название
          <input type="text" name="articleName" ref={articleName} required />
        </label>
        <label>
          Описание
          <input type="text" name="articleText" ref={articleText} required />
        </label>
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}

export default FormAddArticles;
