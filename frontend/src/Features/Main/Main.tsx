import React from 'react';
import { useAppDispatch } from '../../Redux/store';
import { logOut } from '../../Redux/Reducers/AuthSlice';

function Main(): JSX.Element {
  const dispatch = useAppDispatch();

  const onHandleLogout: React.MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    e.preventDefault();
    dispatch(logOut());
  };

  return (
    <main className="main">
      Main
      <button type="button" onClick={onHandleLogout}>
        logout
      </button>
    </main>
  );
}

export default Main;
