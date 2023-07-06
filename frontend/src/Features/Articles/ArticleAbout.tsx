import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../Redux/store';
import './ArticleAbout.css';
import { articlesInit } from '../../Redux/Reducers/ArticleSlice';

function ArticleAbout(): JSX.Element {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();

  const { articles } = useAppSelector((store) => store.articles);
  useEffect(() => {
    const fetchReviews = async (): Promise<any> => {
      await dispatch(articlesInit());
      setLoading(false);
    };

    fetchReviews();
  }, []);

  if (loading) {
    return <div className="loader"></div>;
  }
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
