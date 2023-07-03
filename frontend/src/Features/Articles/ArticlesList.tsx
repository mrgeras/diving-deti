import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import ArticleItem from './ArticleItem';
import { articlesInit } from '../../Redux/Reducers/ArticleSlice';
import './ArticlesList.css';

function ArticlesList(): JSX.Element {
  const { articles } = useAppSelector((store) => store.articles);
  // console.log(articles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(articlesInit());
  }, []);
  return (
    <div className="article-card-wrapper">
      <div className="article-card-container">
        Статьи
        {articles.map((article) => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}

export default ArticlesList;
