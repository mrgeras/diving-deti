import { CourseState } from './types/CoursesState';
import { Course } from './types/CoursesType';

export const getCourses = async (): Promise<CourseState> => {
  const res = await fetch('/api/courses');
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();

  return data.Course;
};
