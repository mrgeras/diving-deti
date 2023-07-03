import React from 'react';
import { Link } from 'react-router-dom';
import { Course } from './types/CoursesType';
import './CourseItem.css';

function CourseItem({ course }: { course: Course }): JSX.Element {
  return (
    <div className="course-card">
      <img className="course-card-img" src={course.courseImg} alt="" />
      <p>{course.courseName}</p>
      <p>{course.description}</p>
      <button className="about-btn" type="button">
        {' '}
        <Link to={`/courses/${course.id}`}>Подробнее</Link>
      </button>
    </div>
  );
}

export default CourseItem;
