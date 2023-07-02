import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Article } from './types/ArticlesType';
// import './CourseItem.css';

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
      <a className="about-card">
        <button
          className="about-btn"
          onClick={() => getAbout({ article, navigate })}
          type="button"
        >
          <img className="article-card-img" src={article.article_img} alt="" />
          <p>{article.article_name}</p>
          <p>{article.description}</p>
        </button>
      </a>
    </div>
  );
}

export default ArticleItem;
