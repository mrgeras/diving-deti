import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../Features/Courses/api';
import { CoursesState } from '../../Features/Courses/types/CoursesState';
import { CourseId } from '../../Features/Courses/types/CoursesType';

const initialState: CoursesState = { courses: [], error: '' };

export const coursesInit = createAsyncThunk('courses/init', () =>
  api.getCourses()
);

export const addCourse = createAsyncThunk('courses/add', (course: FormData) =>
  api.addCourseFetch(course)
);

export const deleteCourse = createAsyncThunk(
  'courses/delete',
  (value: CourseId) => api.deleteCourseFetch(value)
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
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.courses = state.courses.filter(
          (course) => course.id !== +action.payload
        );
      })
      .addCase(deleteCourse.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default coursesSlice.reducer;
