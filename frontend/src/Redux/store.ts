// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import AuthSlice from './Reducers/AuthSlice';
import CoursesSlice from './Reducers/CourseSlice';
import MessageSlice from './Reducers/MessageSlice';
import ArticleSlice from './Reducers/ArticleSlice';
import RequestSlice from './Reducers/RequestSlice';
import rewiewSlice from './Reducers/RewiewSlice';
import CoachesSlice from './Reducers/CoachSlice';

const store = configureStore({
  reducer: {
    courses: CoursesSlice,
    auth: AuthSlice,
    messages: MessageSlice,
    articles: ArticleSlice,
    requests: RequestSlice,
    rewiews: rewiewSlice,
    coaches: CoachesSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: <T>(fn: (state: RootState) => T) => T =
  useSelector;
export type RootState = ReturnType<typeof store.getState>;

export default store;
