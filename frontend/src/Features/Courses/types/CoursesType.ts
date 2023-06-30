import { Course_File } from './Course_FileType';

export type Course = {
  id: number;
  course_name: string;
  description: string;
  Course_File: Course_File;
};
