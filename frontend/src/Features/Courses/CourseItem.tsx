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
    <div className="course-card">
      <img className="course-card-img" src={course.courseImg} alt="" />
      <p>{course.courseName}</p>
      <p>{course.description}</p>
      <button className="about-btn" type="button">
        {' '}
        <Link to={`/courses/${course.id}`}>Подробнее</Link>
      </button>
      <button type="button" onClick={() => onHandleRemove(course.id)}>
        Удалить
      </button>
    </div>
  );
}

export default CourseItem;
