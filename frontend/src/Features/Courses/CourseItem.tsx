import React from 'react';
import { Course } from './types/CoursesType';
import './CourseItem.css';

function CourseItem({ course }: { course: Course }): JSX.Element {
  return (
    <div className="course-card-container">
      <img className="course-card" src={course.course_img} alt="" />
      <p>{course.course_name}</p>
      <p>{course.description}</p>
    </div>
  );
}

export default CourseItem;
