import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Article } from './types/ArticlesType';
import './ArticleItem.css';

function getAbout({
  article,
  navigate,
}: {
  article: Article;
  navigate: (value: string) => void;
}): void {
  navigate(`/courses/${article.id}`);
}

function ArticleItem({ article }: { article: Article }): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="article-card">
      <a className="about-article-card">
        <button
          className="about-article-btn"
          onClick={() => getAbout({ article, navigate })}
          type="button"
        >
          <img className="article-card-img" src={article.articleImg} alt="" />
          <p>{article.articleName}</p>
          <p>{article.articleText}</p>
        </button>
      </a>
    </div>
  );
}

export default ArticleItem;
