export type Course = {
  id: number;
  course_img: string;
  course_name: string;
  description: string;
};
export type CourseAbout = {
  id: number;
  course_img: string;
  course_name: string;
  description: string;
};
export type CourseId = Course['id'];

export type CourseWithOutId = {
  course_img: string;
  course_name: string;
  description: string;
};
