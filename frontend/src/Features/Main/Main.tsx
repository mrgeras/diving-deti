import React from 'react';
import './Main.scss';
import { useAppDispatch } from '../../Redux/store';
import { logOut } from '../../Redux/Reducers/AuthSlice';
import ReviewList from '../Review/ReviewList';

function Main(): JSX.Element {
  const dispatch = useAppDispatch();

  const onHandleLogout: React.MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    e.preventDefault();
    dispatch(logOut());
  };
  return (
    <>
      <main className="main">
        <ReviewList />
        <div className="main__content">
          <p className="main__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            similique eligendi amet vel voluptates quod repudiandae eum tempora
            iste voluptatum, provident aspernatur molestias error mollitia
            dolores necessitatibus.
          </p>

        </div>
      </main>
      <button type="button" onClick={onHandleLogout}>
        logout
      </button>
    </>
  );
}

export default Main;
