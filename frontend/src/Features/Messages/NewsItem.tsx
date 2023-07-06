import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import { Message, MessageId } from './types/MessageTypes';
import { deleteMessage } from '../../Redux/Reducers/MessageSlice';
import './News.scss';

// Message === News / Название Message иногда встречается вместо News

function NewsItem({ message }: { message: Message }): JSX.Element {
  const dispatch = useAppDispatch();
  const [trigger, setTrigger] = useState(true);
  const { admin } = useAppSelector((store) => store.auth);

  const onHandleRemove = (value: MessageId): void => {
    dispatch(deleteMessage(value));
  };
  return (
    <div className="news__card">
      <div className="news__card__left">
        <img className="news__card__img" src={message.messageImg} alt="Фото новости" />
      </div>
      <div className="news__card__right">
        <h1 className="news__card__name">{message.messageName}</h1>
        <p className="news__card__text">{message.messageText}</p>
        <div className="news__card__btn__group">
          <button type="button" className="news__card__btn__about">
            <Link
              to={`/messages/${message.id}`}
              className="news__card__btn__about__link"
            >
              Подробнее
            </Link>
          </button>
          {admin && trigger ? (
            <button
              type="button"
              className="news__card__btn__del"
              onClick={() => setTrigger(false)}
            >
              Удалить
            </button>
          ) : (
            <div className="news__card__modal__group">
              <h1 className="news__card__modal__text">Вы точно хотите удалить эту новость?</h1>
              <div className="news__card__modal__btn__group">
                <button
                  type="button"
                  className="news__card__modal__btn__yes"
                  onClick={() => onHandleRemove(message.id)}
                >
                  Да
                </button>
                <button
                  type="button"
                  className="news__card__modal__btn__no"
                  onClick={() => setTrigger(true)}
                >
                  Нет
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
