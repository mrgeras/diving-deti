import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import ArticleItem from './ArticleItem';
import { articlesInit } from '../../Redux/Reducers/ArticleSlice';
import './ArticlesList.css';

function ArticlesList(): JSX.Element {
  const { articles } = useAppSelector((store) => store.articles);
  // console.log(articles);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    dispatch(articlesInit());
  }, []);
  useEffect(() => {
    const fetchcourses = async (): Promise<any> => {
      await dispatch(articlesInit());
      setLoading(false);
    };

    fetchcourses();
  }, []);
  if (loading) {
    return <div className="loader"></div>;
  }
  return (
    <div className="article-card-wrapper">
      {/* <FormAddArticles /> */}
      <h1 className="title">Статьи</h1>
      <div className="article-card-container">
        {articles.map((article) => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}

export default ArticlesList;
