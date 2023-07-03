import React from 'react';
import { Link } from 'react-router-dom';
import { Article, ArticleId } from './types/ArticlesType';
import './ArticleItem.css';
import { useAppDispatch } from '../../Redux/store';
import { deleteArticle } from '../../Redux/Reducers/ArticleSlice';

function ArticleItem({ article }: { article: Article }): JSX.Element {
  const dispatch = useAppDispatch();

  const onHandleRemove = (value: ArticleId): void => {
    dispatch(deleteArticle(value));
  };

  return (
    <div className="article-card">
      <a className="about-article-card">
        <img className="article-card-img" src={article.articleImg} alt="" />
        <p>{article.articleName}</p>
        <p>{article.articleText}</p>
        <button className="about-article-btn" type="button">
          <Link to={`/articles/${article.id}`}>Подробнее</Link>
        </button>
        <button type="button" onClick={() => onHandleRemove(article.id)}>
          Удалить
        </button>
      </a>
    </div>
  );
}

export default ArticleItem;
