import React from 'react';
import { Course } from './types/CoursesType';
import { useAppSelector } from '../../Redux/store';

function CourseItem({ course }: { course: Course }): JSX.Element {
  
  return <div>
    <img src={course.img} alt="" />
  </div>;
}

export default CourseItem;
