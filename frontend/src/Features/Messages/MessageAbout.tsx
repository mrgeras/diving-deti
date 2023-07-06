import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../Redux/store';
import './MessageAbout.css';
import { messagesInit } from '../../Redux/Reducers/MessageSlice';

function MessageAbout(): JSX.Element {
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
    <>
      <h3>{message?.messageName}</h3>
      <div className="firstyar">
        <img
          className="message-page__img"
          src={message?.messageImg}
          alt="message"
        />
        <p>{message?.messageText}</p>
      </div>
      <p>{message?.messageText2}</p>
      <button onClick={() => navigate(-1)} type="button">
        Назад к списку новостей
      </button>
    </>
  );

  return (
    <div className="message-page__container">{!message ? error : content}</div>
  );
}

export default MessageAbout;
