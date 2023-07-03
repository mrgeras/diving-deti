import React, { useState } from 'react';
import { useAppDispatch } from '../../Redux/store';
import { addMessage } from '../../Redux/Reducers/MessageSlice';

function FormAddMessage(): JSX.Element {
  const [messageImg, setMessageImg] = useState('');
  const [messageName, setMessageName] = useState('');
  const [messageText, setMessageText] = useState('');

  const dispatch = useAppDispatch();

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    dispatch(addMessage({ messageImg, messageName, messageText }));

    setMessageImg('');
    setMessageName('');
    setMessageText('');
  };

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <label>
          Фото
          <input
            type="text"
            value={messageImg}
            onChange={(e) => setMessageImg(e.target.value)}
          />
        </label>
        <label>
          Название
          <input
            type="text"
            value={messageName}
            onChange={(e) => setMessageName(e.target.value)}
          />
        </label>
        <label>
          Описание
          <input
            type="text"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
          />
        </label>
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}

export default FormAddMessage;
