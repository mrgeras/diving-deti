// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { getCourses } from '../Features/Courses/api';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import AuthSlice from './Reducers/AuthSlice';

const store = configureStore({
  reducer: {
    course: getCourses,
    auth: AuthSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: <T>(fn: (state: RootState) => T) => T =
  useSelector;
export type RootState = ReturnType<typeof store.getState>;

export default store;
