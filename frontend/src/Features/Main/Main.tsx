import React from 'react';
import './Main.scss';
import { useAppDispatch } from '../../Redux/store';
import { logOut } from '../../Redux/Reducers/AuthSlice';
import ReviewList from '../Review/ReviewList';
import ThreeOtzov from '../Three_otzov/Three_otzov';
import Ya from '../Map';
import { Course } from '../Courses/types/CoursesType';

function Main({ course }: { course: Course }): JSX.Element {
  return (
    <main className="main">
      <div className="main__content">
        <ReviewList />
        <ThreeOtzov course={course} />
        <Ya /> <br />
        <div>
          <p className="main__text">
            ТАКЖЕ НАШ КЛУБ ПРЕДЛАГАЕТ ОТПРАЗДНОВАТЬ ЛЮБОЙ ПРАЗДНИК НА ВОДЕ, БУДЬ
            ТО ДЕНЬ РОЖДЕНИЯ ИЛИ НОВЫЙ ГОД. МЫ УСТРОИМ КОНКУРСЫ И ЭСТАФЕТЫ, И
            КОНЕЧНО ПОГРУЖЕНИЯ С АКВАЛАНГОМ! МЕРОПРИЯТИЕ ДЛЯ ДЕТЕЙ ОТ 10 ЛЕТ.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Main;
