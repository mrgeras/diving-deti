import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../Redux/store';

function ArticleAbout(): JSX.Element {
  const { articleId } = useParams();
  const navigate = useNavigate();

  const { articles } = useAppSelector((store) => store.articles);

  let article;
  if (articleId) {
    article = articles.find((artic) => artic.id === +articleId);
  }

  const error = <h1>Нет такой статьи</h1>;

  const content = (
    <>
      <h3>{article?.article_name}</h3>
      <img
        className="article-page__img"
        src={article?.article_img}
        alt="article"
      />
      <p>{article?.article_text}</p>
      <button onClick={() => navigate(-1)} type="button">
        Назад к списку статей
      </button>
    </>
  );

  return (
    <div className="article-page__container">{!article ? error : content}</div>
  );
}

export default ArticleAbout;
