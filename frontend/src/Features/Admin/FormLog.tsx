import React, { useState } from 'react';

function FormLog(): JSX.Element {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/auth/authorization', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
        password,
      }),
    });

    const data = await res.json();

    console.log(data);
  };

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <label>
          Имя
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
