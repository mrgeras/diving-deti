import React from 'react';
import './Main.scss';
import { useAppDispatch } from '../../Redux/store';
import { logOut } from '../../Redux/Reducers/AuthSlice';
import ReviewList from '../Review/ReviewList';
import Three_otzov from '../Three_otzov/Three_otzov';

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
        <div className="main__content">
          <ReviewList />
          <Three_otzov />
          <div>
            <p className="main__text">
              ТАКЖЕ НАШ КЛУБ ПРЕДЛАГАЕТ ОТПРАЗДНОВАТЬ ЛЮБОЙ ПРАЗДНИК НА ВОДЕ,
              БУДЬ ТО ДЕНЬ РОЖДЕНИЯ ИЛИ НОВЫЙ ГОД. МЫ УСТРОИМ КОНКУРСЫ И
              ЭСТАФЕТЫ, И КОНЕЧНО ПОГРУЖЕНИЯ С АКВАЛАНГОМ! МЕРОПРИЯТИЕ ДЛЯ ДЕТЕЙ
              ОТ 10 ЛЕТ.
            </p>
          </div>
        </div>
      </main>
      <button type="button" onClick={onHandleLogout}>
        logout
      </button>
    </>
  );
}

export default Main;
