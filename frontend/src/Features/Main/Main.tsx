import React, { useEffect, useState } from 'react';
import './Main.scss';
// import { useAppDispatch } from '../../Redux/store';
// import { logOut } from '../../Redux/Reducers/AuthSlice';
import ReviewList from '../Review/ReviewList';
import ThreeOtzov from '../Three_otzov/Three_otzov';
import Ya from '../Map';
import { Course } from '../Courses/types/CoursesType';
import Slider from '../Slider/Slider';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import CourseItem from '../Courses/CourseItem';
import { coursesInit } from '../../Redux/Reducers/CourseSlice';

function Main({ course }: { course: Course }): JSX.Element {
  const { courses } = useAppSelector((store) => store.courses);

  const courses3 = courses.filter((course, id) => id < 3);

  const [loading, setLoading] = useState(true);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchcourses = async (): Promise<any> => {
      await dispatch(coursesInit());
      setLoading(false);
    };

    fetchcourses();
  }, []);

  if (loading) {
    return <div className="loader" />;
  }

  return (
    <main className="main">
      <div className="main__content">
        <div className="course__card__container">
          {courses3.map((course1) => (
            <CourseItem key={course1.id} course={course1} />
          ))}
        </div>
        <Slider />
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
