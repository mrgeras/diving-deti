import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from './types/ArticlesType';
import './ArticleItem.css';

function ArticleItem({ article }: { article: Article }): JSX.Element {
  return (
    <div className="article-card">
      <a className="about-article-card">
        <img className="article-card-img" src={article.articleImg} alt="" />
        <p>{article.articleName}</p>
        <p>{article.articleText}</p>
        <button className="about-article-btn" type="button">
          <Link to={`/articles/${article.id}`}>Подробнее</Link>
        </button>
      </a>
    </div>
  );
}

export default ArticleItem;
