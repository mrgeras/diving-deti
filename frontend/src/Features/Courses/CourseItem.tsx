import React from 'react';
import { Link } from 'react-router-dom';
import { Course, CourseId } from './types/CoursesType';
import './CourseItem.css';
import { useAppDispatch } from '../../Redux/store';
import { deleteCourse } from '../../Redux/Reducers/CourseSlice';

function CourseItem({ course }: { course: Course }): JSX.Element {
  const dispatch = useAppDispatch();

  const onHandleRemove = (value: CourseId): void => {
    dispatch(deleteCourse(value));
  };

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
      <button type="button" onClick={() => onHandleRemove(course.id)}>
        Удалить
      </button>
    </div>
  );
}

export default CourseItem;

//
