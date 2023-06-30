import React, { useState } from 'react';
import { useAppDispatch } from '../../Redux/store';
import { authorization } from '../../Redux/Reducers/AuthSlice';

function FormLog(): JSX.Element {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e
  ): Promise<void> => {
    e.preventDefault();
    dispatch(authorization({ login, password }));
  };

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <label>
          Имя
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </label>
        <label>
          Пароль
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}

export default FormLog;
