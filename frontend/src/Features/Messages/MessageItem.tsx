import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Message } from './types/MessageTypes';

function getAboutMessage({
  message,
  navigate,
}: {
  message: Message;
  navigate: (value: string) => void;
}): void {
  navigate(`/messages/${message.id}`);
}

function MessageItem({
  message,
}: {
  message: Message;
}): JSX.Element {
  const navigate = useNavigate();
  // console.log(message);
  return (
    <div className="message-card">
      <a className="about-card-info">
        <button
          className="about-info-btn"
          onClick={() => getAboutMessage({ message, navigate })}
          type="button"
        >
          <img
            className="message-card-img"
            src={message.messageImg}
            alt="info"
          />
          <p>{message.messageName}</p>
          <p>{message.messageText}</p>

        </button>
      </a>
    </div>
  );
}

export default MessageItem;
