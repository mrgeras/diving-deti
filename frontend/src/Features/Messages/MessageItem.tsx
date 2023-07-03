import React from 'react';
import { Link } from 'react-router-dom';
import { Message, MessageId } from './types/MessageTypes';
import { useAppDispatch } from '../../Redux/store';
import { deleteMessage } from '../../Redux/Reducers/MessageSlice';

function MessageItem({ message }: { message: Message }): JSX.Element {
  const dispatch = useAppDispatch();

  const onHandleRemove = (value: MessageId): void => {
    dispatch(deleteMessage(value));
  };

  return (
    <div className="message-card">
      <img
        className="message-card-img"
        src={message.messageImg}
        alt="message"
      />
      <p>{message.messageName}</p>
      <p>{message.messageText}</p>
      <button className="about-message-btn" type="button">
        <Link to={`/messages/${message.id}`}>Подробнее</Link>
      </button>
      <button type="button" onClick={() => onHandleRemove(message.id)}>
        Удалить
      </button>
    </div>
  );
}

export default MessageItem;
