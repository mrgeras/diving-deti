import React from 'react';
import { useAppSelector } from '../../Redux/store';
import store, { RootState } from '../../Redux/store';

function CoursesList() {
  const { courses } = useAppSelector((store) => store.course);
  return <div>
    {courses.map((course)=><)}
  </div>;
}

export default CoursesList;
