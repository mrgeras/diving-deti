import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import {
  authorization,
  clearError,
  logOut,
} from '../../Redux/Reducers/AuthSlice';
import RequestsList from '../Requests/RequestsList';

function FormLog(): JSX.Element {
  const { admin, error } = useAppSelector((store) => store.auth);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();

  // const navigate = useNavigate();

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

  // useEffect(() => {
  //   if (admin) {
  //     navigate('/');
  //   }
  // }, [admin, navigate]);

  return (
    <div>
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
        <button type="button" onClick={onHandleLogout}>
          logout
        </button>
      )}
    </div>
  );
}

export default FormLog;
