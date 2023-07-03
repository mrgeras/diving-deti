import React, { useState } from 'react';
import { useAppDispatch } from '../../Redux/store';
import { addArticle } from '../../Redux/Reducers/ArticleSlice';

function FormAddArticles(): JSX.Element {
  const [articleImg, setArticleImg] = useState('');
  const [articleName, setArticleName] = useState('');
  const [articleText, setArticleText] = useState('');

  const dispatch = useAppDispatch();

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    dispatch(addArticle({ articleImg, articleName, articleText }));

    setArticleImg('');
    setArticleName('');
    setArticleText('');
  };

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <label>
          Фото
          <input
            type="text"
            value={articleImg}
            onChange={(e) => setArticleImg(e.target.value)}
          />
        </label>
        <label>
          Название
          <input
            type="text"
            value={articleName}
            onChange={(e) => setArticleName(e.target.value)}
          />
        </label>
        <label>
          Описание
          <input
            type="text"
            value={articleText}
            onChange={(e) => setArticleText(e.target.value)}
          />
        </label>
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}

export default FormAddArticles;
