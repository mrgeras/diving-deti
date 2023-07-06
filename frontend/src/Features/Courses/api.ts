import { Course, CourseId } from './types/CoursesType';

export const getCourses = async (): Promise<Course[]> => {
  const res = await fetch('/api/courses');
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();

  return data;
};
export const getCoursesOne = async (value: CourseId): Promise<Course[]> => {
  console.log(value, "f");
  const res = await fetch('/api/courses');
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();

  return data;
};

export const addCourseFetch = async (course: FormData): Promise<Course> => {
  const res = await fetch('/api/courses', {
    method: 'POST',
    body: course,
  });
  const data = await res.json();
  return data;
};  

export const deleteCourseFetch = async (value: CourseId): Promise<CourseId> => {
  const res = await fetch(`/api/courses/${value}`, {
    method: 'DELETE',
  });
  return res.json();
};

export default getCourses;
