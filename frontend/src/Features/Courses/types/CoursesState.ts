import { Course } from './CoursesType';

export type CoursesState = {
  courses: Course[];
  error: string | undefined;
};
export type CourseAboutState = {
  course: Course[];
  error: string | undefined;
};
