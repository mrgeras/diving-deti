import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Article, ArticleId } from './types/ArticlesType';
import './ArticleItem.css';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import { deleteArticle } from '../../Redux/Reducers/ArticleSlice';

function ArticleItem({ article }: { article: Article }): JSX.Element {
  const [trigger, setTrigger] = useState(true);
  const dispatch = useAppDispatch();

  const { admin } = useAppSelector((store) => store.auth);

  const onHandleRemove = (value: ArticleId): void => {
    dispatch(deleteArticle(value));
  };

  return (
    <div className="article-card-item">
      <h1 className="article-card-name">{article.articleName}</h1>
      <div className="article-card-item-div">
        <img
          className="article-card-img"
          src={article.articleImg}
          alt="article"
        />
        {/* <p className="article-card-text">{article.articleText}</p> */}
      </div>
      <div className="article-btn-group">
        <button className="about-article-btn" type="button">
          <Link to={`/articles/${article.id}`} className="link-text">
            Подробнее
          </Link>
        </button>
        {admin &&
          (trigger ? (
            <button
              className="del-article-btn"
              type="button"
              onClick={() => setTrigger(false)}
            >
              Удалить
            </button>
          ) : (
            <div className="modal-article-group">
              <h4 className="modal-article-text">Вы точно хотите удалить?</h4>
              <div className="btn-modal-article-group">
                <button
                  className="btn-article-yes"
                  type="button"
                  onClick={() => onHandleRemove(article.id)}
                >
                  Да
                </button>
                <button
                  className="btn-article-no"
                  type="button"
                  onClick={() => setTrigger(true)}
                >
                  нет
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ArticleItem;
