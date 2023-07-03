import React from 'react';
import { Link } from 'react-router-dom';
import { Message } from './types/MessageTypes';

function MessageItem({ message }: { message: Message }): JSX.Element {
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
    </div>
  );
}

export default MessageItem;
