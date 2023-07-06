import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../Redux/store';
import './ArticleAbout.css';

function ArticleAbout(): JSX.Element {
  const { articleId } = useParams();
  const navigate = useNavigate();

  const { articles } = useAppSelector((store) => store.articles);
  console.log(articles);

  let article;
  if (articleId) {
    article = articles.find((artic) => artic.id === +articleId);
  }

  const error = <h1>Нет такой статьи</h1>;

  const content = (
    <>
      <h3>{article?.articleName}</h3>
      <div className="firstyar">
        <img
          className="article-page__img"
          src={article?.articleImg}
          alt="article"
        />
        <div>{article?.articleText}</div>
      </div>

      <p>{article?.articleText2}</p>
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
