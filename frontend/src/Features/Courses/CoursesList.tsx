import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import CourseItem from './CourseItem';
import { coursesInit } from '../../Redux/Reducers/CourseSlice';
import './CoursesList.css';
import FormAddCourses from './FormAddCourses';

function CoursesList(): JSX.Element {
  const { courses } = useAppSelector((store) => store.courses);
  // console.log(courses);
  const dispatch = useAppDispatch();

  const { admin } = useAppSelector((store) => store.auth);

  useEffect(() => {
    dispatch(coursesInit());
  }, []);
  return (
    <div className="course-card-wrapper">
      {admin && <FormAddCourses />}
      <h1>Курсы</h1>
      <div className="course-card-container">
        {courses.map((course) => (
          <CourseItem key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default CoursesList;
