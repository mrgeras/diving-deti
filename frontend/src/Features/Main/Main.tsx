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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
          similique eligendi amet vel voluptates quod repudiandae eum tempora
          iste voluptatum, provident aspernatur molestias error mollitia dolores
          necessitatibus. Est, quibusdam facere. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quisquam sequi ea repudiandae rem
          eveniet ab reprehenderit beatae accusamus officiis laboriosam
          voluptates, obcaecati, temporibus fugiat commodi harum numquam minus
          cupiditate odio. Dignissimos magni, quia impedit optio sed aliquid,
          repudiandae error tempore natus sint tenetur? Expedita voluptas
          excepturi eum optio! Et modi alias dicta vero nostrum inventore
          tenetur commodi suscipit molestiae expedita ratione repudiandae
          praesentium deserunt cum esse ipsum ad optio laboriosam mollitia
          veniam iste, architecto id voluptatum? Necessitatibus, incidunt
          mollitia ullam voluptates quis saepe sed nulla modi placeat tempora
          doloribus, molestias reiciendis quidem soluta nam nemo! Voluptatum
          maiores quis iste r em.
        </div>
      </main>
      <button type="button" onClick={onHandleLogout}>
        logout
      </button>
    </>
  );
}

export default Main;
