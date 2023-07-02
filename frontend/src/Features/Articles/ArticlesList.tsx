import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import ArticleItem from './ArticleItem';
import { articlesInit } from '../../Redux/Reducers/ArticleSlice';
// import './CourseList.css';

function ArticlesList(): JSX.Element {
  const { articles } = useAppSelector((store) => store.articles);
  // console.log(articles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(articlesInit());
  }, []);
  return (
    <div className="course-card-wrapper">
      <div className="course-card-container">
        Статьи
        {articles.map((article) => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}

export default ArticlesList;
