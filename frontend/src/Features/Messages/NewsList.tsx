import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import { messagesInit } from '../../Redux/Reducers/MessageSlice';
import NewsItem from './NewsItem';

function NewsList(): JSX.Element {
  const { messages } = useAppSelector((store) => store.messages);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(messagesInit());
  }, []);

  return (
      <div className="news__card__container">
        {messages.map((message) => (
          <NewsItem key={message.id} message={message} />
        ))}
      </div>
  );
}

export default NewsList;
