export type Course = {
  id: number;
  courseImg: string;
  courseName: string;
  description: string;
};
export type CourseAbout = {
  id: number;
  courseImg: string;
  courseName: string;
  description: string;
};
export type CourseId = Course['id'];

export type CourseWithOutId = {
  courseImg: string;
  courseName: string;
  description: string;
};
