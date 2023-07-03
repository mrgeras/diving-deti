import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import MessageItem from './MessageItem';
import { messagesInit } from '../../Redux/Reducers/MessageSlice';
import FormAddMessage from './FormAddMessage';

function MessageList(): JSX.Element {
  const { messages } = useAppSelector((store) => store.messages);
  const dispatch = useAppDispatch();
  // console.log(messages);
  useEffect(() => {
    dispatch(messagesInit());
  }, []);
  return (
    <div className="message-card-wrapper">
      <FormAddMessage />
      <div className="message-card-container">
        Новости
        {messages.map((message) => (
          <MessageItem key={message.id} message={message} />
        ))}
      </div>
    </div>
  );
}

export default MessageList;
