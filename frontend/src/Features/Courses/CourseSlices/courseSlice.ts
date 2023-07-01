import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../api';
import { CoursesState } from '../types/CoursesState';

const initialState: CoursesState = { courses: [], error: '' };

export const coursesInit = createAsyncThunk('courses/init', () =>
  api.getCourses()
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
      });
  },
});

export default coursesSlice.reducer;
