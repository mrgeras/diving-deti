import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import CourseItem from './CourseItem';
import { coursesInit } from '../../Redux/Reducers/CourseSlice';

function CoursesList(): JSX.Element {
  const { courses } = useAppSelector((store) => store.courses);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchcourses = async (): Promise<any> => {
      await dispatch(coursesInit());
      setLoading(false);
    };

    fetchcourses();
  }, []);
  if (loading) {
    return <div className="loader" />;
  }

  return (
    <div className="course__card__wrapper">
      <div className="course__card__container">
        {courses.map((course) => (
          <CourseItem key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default CoursesList;
