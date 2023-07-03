import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../Features/Courses/api';
import { CoursesState } from '../../Features/Courses/types/CoursesState';
import { CourseWithOutId } from '../../Features/Courses/types/CoursesType';

const initialState: CoursesState = { courses: [], error: '' };

export const coursesInit = createAsyncThunk('courses/init', () =>
  api.getCourses()
);

export const addCourse = createAsyncThunk(
  'courses/add',
  (course: CourseWithOutId) => api.addCourseFetch(course)
);

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(coursesInit.fulfilled, (state, action) => {
        state.courses = action.payload;
        state.error = '';
      })
      .addCase(coursesInit.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addCourse.fulfilled, (state, action) => {
        state.courses.push(action.payload);
      })
      .addCase(addCourse.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default coursesSlice.reducer;
