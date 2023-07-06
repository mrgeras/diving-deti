import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../Features/About/api';
import { CoachState } from '../../Features/About/CoachState';

const initialState: CoachState = { coaches: [], error: '' };

export const coachInit = createAsyncThunk('coaches/init', () =>
  api.getCoaches()
);

const coachesSlice = createSlice({
  name: 'coaches',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(coachInit.fulfilled, (state, action) => {
        state.coaches = action.payload;
        state.error = '';
      })
      .addCase(coachInit.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default coachesSlice.reducer;
