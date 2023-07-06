import { Course } from '../../Courses/types/CoursesType';

export type Request = {
  id: number;
  courseId: number;
  requestStatus: boolean;
  userName: string;
  tel: string;
  email: string;
  Course?: Course;
};

export type Answer = {
  id:number,
  text:string
}

export type RequestId = Request['id'];

export type RequestWithOutId = Omit<Request, 'id'>;

export type RequestState = {
  requests: Request[];
  answers: Answer[];
  error: string | undefined;
};

export type ObjRequest = {
  id: RequestId;
  requestStatus: boolean;
};
