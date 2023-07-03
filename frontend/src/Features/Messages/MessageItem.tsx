import React from 'react';
import { Link } from 'react-router-dom';
import { Message } from './types/MessageTypes';
import './MessageItem.css';

function MessageItem({ message }: { message: Message }): JSX.Element {
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
    </div>
  );
}

export default MessageItem;
