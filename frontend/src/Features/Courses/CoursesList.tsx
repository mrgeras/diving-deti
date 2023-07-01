import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import CourseItem from './CourseItem';
import { coursesInit } from './CourseSlices/courseSlice';
import './CourseList.css';

function CoursesList(): JSX.Element {
  const { courses } = useAppSelector((store) => store.courses);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(coursesInit());
  }, []);
  return (
    <div className="course-card-container">
      Курсы
      {courses.map((course) => (
        <CourseItem key={course.id} course={course} />
      ))}
    </div>
  );
}

export default CoursesList;
