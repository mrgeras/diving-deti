import React from 'react';
import './Main.scss';
// import { useAppDispatch } from '../../Redux/store';
// import { logOut } from '../../Redux/Reducers/AuthSlice';
import ReviewList from '../Review/ReviewList';
import ThreeOtzov from '../Three_otzov/Three_otzov';
import Ya from '../Map';
import { Course } from '../Courses/types/CoursesType';
import Slider from '../Slider/Slider';

function Main({ course }: { course: Course }): JSX.Element {
  return (
    <main className="main">
      <div className="main__content">
        <Slider />
        <ReviewList />
        <ThreeOtzov course={course} />
        <Ya /> <br />
        <div>
          <p className="main__text">
            Также наш клуб предлагает отпраздновать любой праздник на воде,
            будь то день рождения или новый год. Мы устроим конкурсы и эстафеты, 
            и конечно погружения с аквалалангом! Мероприятие для детей от 10 лет.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Main;
