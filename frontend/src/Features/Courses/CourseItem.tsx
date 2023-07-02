import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Course } from './types/CoursesType';
import './CourseItem.css';

function getAbout({
  course,
  navigate,
}: {
  course: Course;
  navigate: (value: string) => void;
}): void {
  navigate(`/courses/${course.id}`);
}

function CourseItem({ course }: { course: Course }): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="course-card">
      <a className="about-card">
        <button
          className="about-btn"
          onClick={() => getAbout({ course, navigate })}
          type="button"
        >
          <img className="course-card-img" src={course.course_img} alt="" />
          <p>{course.course_name}</p>
          <p>{course.description}</p>
        </button>
      </a>
    </div>
  );
}

export default CourseItem;
