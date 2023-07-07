import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import { messagesInit } from '../../Redux/Reducers/MessageSlice';
import './News.scss';

function NewsAbout(): JSX.Element {
  const { messageId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(true);
  const { messages } = useAppSelector((store) => store.messages);
  useEffect(() => {
    const fetchReviews = async (): Promise<any> => {
      await dispatch(messagesInit());
      setLoading(false);
    };

    fetchReviews();
  }, []);

  if (loading) {
    return <div className="loader"></div>;
  }
  let message;
  if (messageId) {
    message = messages.find((mess) => mess.id === +messageId);
  }

  const error = <h1>Таких новостей нет</h1>;

  const content = (
    <div className="news__about__content">
      <h3 className="news__about__name">{message?.messageName}</h3>
      <div className="firstyar">
        <img
          className="news__about__img"
          src={message?.messageImg}
          alt="message"
        />
        <p className="news__about__text">{message?.messageText}</p>
      </div>
      <p className="news__about__text2">{message?.messageText2}</p>
      <button
        onClick={() => navigate(-1)}
        type="button"
        className="news__about__btn__back"
      >
        Назад к списку cтатей
      </button>
    </div>
  );

  return (
    <div className="news__about__container">{!message ? error : content}</div>
  );
}

export default NewsAbout;
