import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import { Message, MessageId } from './types/MessageTypes';
import { deleteMessage } from '../../Redux/Reducers/MessageSlice';

import './News.scss';
import ButtonNews from './Buttons/ButtonNews';

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
        <img
          className="news__card__img"
          src={message.messageImg}
          alt="Фото новости"
        />
      </div>
      <div className="news__card__right">
        <div className="news__card__name">
          {message.messageName}
          {admin &&
            (trigger ? (
              <button
                type="button"
                className="news__card__btn__del"
                onClick={() => setTrigger(false)}
              >
                X
              </button>
            ) : (
              <div className="news__card__modal__group">
                <h4 className="news__card__modal__text">
                  Вы точно хотите удалить эту новость?
                </h4>
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
            ))}
        </div>
        <p className="news__card__text">{message.messageText}</p>
        <div className="news__card__btn__group">
          {/* <button type="button" className="news__card__btn__about">
            <Link
              to={`/messages/${message.id}`}
              className="news__card__btn__about__link"
            >
              Подробнее
            </Link>
          </button> */}
          <ButtonNews id={message.id} />
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
