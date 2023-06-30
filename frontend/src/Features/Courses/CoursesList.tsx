import React from 'react';
import { useSelector } from 'react-redux';

function CoursesList() {
  const { courses } = useSelector;
  return <div>Courses</div>;
}

export default CoursesList;
