import { Course, CourseId, CourseWithOutId } from './types/CoursesType';

export const getCourses = async (): Promise<Course[]> => {
  const res = await fetch('/api/courses');
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();

  return data;
};

export const addCourseFetch = async (
  course: CourseWithOutId
): Promise<Course> => {
  const res = await fetch('/api/courses', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(course),
  });

  return res.json();
};

export const deleteCourseFetch = async (value: CourseId): Promise<CourseId> => {
  const res = await fetch(`/api/courses/${value}`, {
    method: 'DELETE',
  });
  return res.json();
};

export default getCourses;
