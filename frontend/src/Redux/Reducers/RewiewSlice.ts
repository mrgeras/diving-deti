import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../Features/Review/api';

import { ReviewState } from '../../Features/Review/types/ReviewState';
import { Review } from '../../Features/Review/types/ReviewTypes';

const initialState: ReviewState = { rewiews: [], error: '' };

export const reviewsInit = createAsyncThunk('rewiews/init', () =>
  api.getReview()
);

const rewiewSlice = createSlice({
  name: 'rewiews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(reviewsInit.fulfilled, (state, action) => {
        state.rewiews = action.payload;
        state.error = '';
      })
      .addCase(reviewsInit.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default rewiewSlice.reducer;
