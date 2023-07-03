import React from 'react';
import { Link } from 'react-router-dom';
import { Course } from './types/CoursesType';
import './CourseItem.css';

function CourseItem({ course }: { course: Course }): JSX.Element {
  return (
    <div className="course-card-item">
      <img className="course-card-img" src={course.courseImg} alt="course" />
      <p className="course-card-name">{course.courseName}</p>
      <p className="course-card-description">{course.description}</p>
      <button className="about-course-btn" type="button">
        <Link to={`/courses/${course.id}`} className="link-text">
          Подробнее
        </Link>
      </button>
    </div>
  );
}

export default CourseItem;
