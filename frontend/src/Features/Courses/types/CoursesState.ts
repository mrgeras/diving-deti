import { Course } from './CoursesType';

export type CoursesState = {
  courses: Course[];
  error: string | undefined;
};
