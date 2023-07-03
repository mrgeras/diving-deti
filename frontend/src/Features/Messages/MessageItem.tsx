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
      <div className="message-btn-group">
        <button className="about-message-btn" type="button">
          <Link to={`/messages/${message.id}`} className="link-text">
            Подробнее
          </Link>
        </button>
        {trigger ? (
          <button
            className="del-message-btn"
            type="button"
            onClick={() => setTrigger(false)}
          >
            Удалить
          </button>
        ) : (
          <div className="modal-message-group">
            <h4 className="modal-message-text">Вы точно хотите удалить?</h4>
            <div className="btn-modal-course-group">
              <button
                className="btn-message-yes"
                type="button"
                onClick={() => onHandleRemove(message.id)}
              >
                Да
              </button>
              <button
                className="btn-message-no"
                type="button"
                onClick={() => setTrigger(true)}
              >
                Нет
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MessageItem;
