import { Course } from './types/CoursesType';

export const getCourses = async (): Promise<Course[]> => {
  const res = await fetch('/api/courses');
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();

  return data;
};

export default getCourses;
