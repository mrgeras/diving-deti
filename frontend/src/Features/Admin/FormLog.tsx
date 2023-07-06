import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import { authorization, clearError } from '../../Redux/Reducers/AuthSlice';

function FormLog(): JSX.Element {
  const { admin, error } = useAppSelector((store) => store.auth);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

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

  useEffect(() => {
    if (admin) {
      navigate('/');
    }
  }, [admin, navigate]);

  return (
    <div>
      {error && <span style={{ color: 'red', fontSize: '25' }}>{error}</span>}
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
    </div>
  );
}

export default FormLog;
