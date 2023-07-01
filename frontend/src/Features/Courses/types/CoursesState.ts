import { Course } from './CoursesType';

export type CoursesState = {
  courses: Course[] | undefined;
  error: string | undefined;
};
