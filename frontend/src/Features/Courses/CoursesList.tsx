import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import CourseItem from './CourseItem';
import { coursesInit } from './CourseSlices/courseSlice';

function CoursesList(): JSX.Element {
  const { courses } = useAppSelector((store) => store.courses);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(coursesInit());
  }, []);
  return (
    <div>
      Курсы
      {courses?.map((course) => (
        <CourseItem key={course.id} course={course} />
      ))}
    </div>
  );
}

export default CoursesList;
