import React, { useState } from 'react';
import { useAppDispatch } from '../../Redux/store';

function FormRequest(): JSX.Element {
  const [userName, setUserName] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useAppDispatch();

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <label>
          Имя
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          Телефон
          <input
            type="text"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
        </label>
        <label>
          Почта
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type="button">Отменить</button>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}

export default FormRequest;
