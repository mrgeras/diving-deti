import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from './types/ArticlesType';
import './ArticleItem.css';

function ArticleItem({ article }: { article: Article }): JSX.Element {
  return (
    <div className="article-card-item">
      <h1 className="article-card-name">{article.articleName}</h1>
      <div className="article-card-item-div">
        <img
          className="article-card-img"
          src={article.articleImg}
          alt="article"
        />
        <p className="message-card-text">{article.articleText}</p>
      </div>

      <button className="about-article-btn" type="button">
        <Link to={`/articles/${article.id}`} className="link-text">
          Подробнее
        </Link>
      </button>
    </div>
  );
}

export default ArticleItem;
