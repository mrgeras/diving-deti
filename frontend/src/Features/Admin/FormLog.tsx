import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import {
  authorization,
  clearError,
  logOut,
} from '../../Redux/Reducers/AuthSlice';
import RequestsList from '../Requests/RequestsList';
import './Admin.css';

function FormLog(): JSX.Element {
  const { admin, error } = useAppSelector((store) => store.auth);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const handleClickk: React.MouseEventHandler<HTMLButtonElement> = () => {
    window.location.href = '/konstrukt';
  };

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e
  ): Promise<void> => {
    e.preventDefault();
    dispatch(
      authorization({
        login,
        password,
        error: undefined,
      })
    );
  };

  const handleChangeLogin: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setLogin(e.target.value);
    dispatch(clearError());
  };

  const onHandleLogout: React.MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    e.preventDefault();
    dispatch(logOut());
  };

  return (
    <div className="allanminpanelb">
      {error && <span style={{ color: 'red', fontSize: '25' }}>{error}</span>}
      {!admin && (
        <form onSubmit={onHandleSubmit}>
          <label>
            Имя
            <input
              required
              type="text"
              value={login}
              onChange={handleChangeLogin}
            />
          </label>
          <label>
            Пароль
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Войти</button>
        </form>
      )}
      {admin && <RequestsList />}
      {admin && (
        <button className="yesbut" type="button" onClick={onHandleLogout}>
          Выйти
        </button>
      )}
      {admin && (
        <button className="nobut" type="button" onClick={handleClickk}>
          Создать пост
        </button>
      )}
    </div>
  );
}

export default FormLog;
