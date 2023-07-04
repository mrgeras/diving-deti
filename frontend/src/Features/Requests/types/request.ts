export type Request = {
  id: number;
  courseId: number;
  requestStatus: boolean;
  userName: string;
  tel: string;
  email: string;
};

export type RequestId = Request['id'];

export type RequestWithOutId = Omit<Request, 'id'>;

export type RequestState = {
  requests: Request[];
  error: string | undefined;
};
