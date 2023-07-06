import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import CourseItem from './CourseItem';
import { coursesInit } from '../../Redux/Reducers/CourseSlice';

function CoursesList(): JSX.Element {
  const { courses } = useAppSelector((store) => store.courses);
  // const { admin } = useAppSelector((store) => store.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(coursesInit());
  }, []);

  return (
    <div className="course__card__wrapper">
      <div className="course__card__container">
        {courses.map((course) => (
          <CourseItem key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default CoursesList;
