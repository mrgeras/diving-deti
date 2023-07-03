import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Message, MessageId } from './types/MessageTypes';
import { useAppDispatch } from '../../Redux/store';
import { deleteMessage } from '../../Redux/Reducers/MessageSlice';
import './MessageItem.css';

function MessageItem({ message }: { message: Message }): JSX.Element {
  const dispatch = useAppDispatch();
  const [trigger, setTrigger] = useState(true);
  const onHandleRemove = (value: MessageId): void => {
    dispatch(deleteMessage(value));
  };

  return (
    <div className="message-card-item">
      <h1 className="message-card-name">{message.messageName}</h1>
      <div className="message-card-item-div">
        <img
          className="message-card-img"
          src={message.messageImg}
          alt="message"
        />
        <p className="message-card-text">{message.messageText}</p>
      </div>
      <button className="about-message-btn" type="button">
        <Link to={`/messages/${message.id}`} className="link-text">
          Подробнее
        </Link>
      </button>
      {trigger ? (
        <button type="button" onClick={() => setTrigger(false)}>
          Удалить
        </button>
      ) : (
        <div>
          <h4>Вы точно хотите удалить?</h4>
          <button type="button" onClick={() => onHandleRemove(message.id)}>
            Да
          </button>
          <button type="button" onClick={() => setTrigger(true)}>
            Нет
          </button>
        </div>
      )}
    </div>
  );
}

export default MessageItem;
