import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../Features/Informations/api';
import { InformationsState } from '../../Features/Informations/types/infoState';

const initialState: InformationsState = { informations: [], error: '' };

export const informationsInit = createAsyncThunk('informations/init', () =>
  api.getInformations()
);

const informationSlice = createSlice({
  name: 'informations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(informationsInit.fulfilled, (state, action) => {
        state.informations = action.payload;
        state.error = '';
      })
      .addCase(informationsInit.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default informationSlice.reducer;
