import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import MessageItem from './MessageItem';
import { messagesInit } from '../../Redux/Reducers/MessageSlice';
import FormAddMessage from './FormAddMessage';
import './MessagesList.css';

function MessageList(): JSX.Element {
  const { messages } = useAppSelector((store) => store.messages);
  const dispatch = useAppDispatch();
  // console.log(messages);
  useEffect(() => {
    dispatch(messagesInit());
  }, []);
  return (
    <div className="message-card-wrapper">

      {admin && <FormAddMessage />}
      <h1 className='HeadName'>НОВОСТИ</h1>
      
      <div className="message-card-container">
        {messages.map((message) => (
          <MessageItem key={message.id} message={message} />
        ))}
      </div>
    </div>
  );
}

export default MessageList;
