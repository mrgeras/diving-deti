import React from 'react';
import { Course } from './types/CoursesType';

function CourseItem({ course }: { course: Course }): JSX.Element {
  return (
    <div>
      <img src={course.course_img} alt="" />
      <p>{course.course_name}</p>
      <p>{course.description}</p>
    </div>
  );
}

export default CourseItem;
