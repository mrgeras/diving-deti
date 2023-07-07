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
        <div className="course__card__container__main">
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
