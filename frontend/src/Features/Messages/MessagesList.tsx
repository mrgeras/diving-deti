import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
// import MessageItem from './MessageItem';
import { messagesInit } from '../../Redux/Reducers/MessageSlice';
// import FormAddMessage from './FormAddMessage';
import './MessagesList.css';
import NewsItem from './NewsItem';

function MessageList(): JSX.Element {
  const { messages } = useAppSelector((store) => store.messages);
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchcourses = async (): Promise<any> => {
      await dispatch(messagesInit());
      setLoading(false);
    };

    fetchcourses();
  }, []);
  if (loading) {
    return <div className="loader">dfff</div>;
  }
  return (
    <div className="news__card__wrapper">
      <div className="news__card__container">
        {messages.map((message) => (
          // <MessageItem key={message.id} message={message} />
          <NewsItem key={message.id} message={message} />
        ))}
      </div>
    </div>
  );
}

export default MessageList;
