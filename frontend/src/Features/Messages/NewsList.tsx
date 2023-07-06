import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import { messagesInit } from '../../Redux/Reducers/MessageSlice';
import NewsItem from './NewsItem';

function NewsList(): JSX.Element {
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
    return <div className="loader"></div>;
  }

  return (
    <div className="news__card__container">
      {messages.map((message) => (
        <NewsItem key={message.id} message={message} />
      ))}
    </div>
  );
}

export default NewsList;
