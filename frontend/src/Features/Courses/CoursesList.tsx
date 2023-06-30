import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import store, { RootState } from '../../Redux/store';
import CourseItem from './CourseItem';
import { coursesInit } from './CourseSlices/CourseSlice';

function CoursesList(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(coursesInit());
  }, [courses, dispatch]);
  const { courses } = useAppSelector((store) => store.course);
  return (
    <div>
      {courses.map((course) => (
        <CourseItem key={course.id} course={course} />
      ))}
    </div>
  );
}

export default CoursesList;
