import { createSlice } from '@reduxjs/toolkit';

interface AppStateI {
  isLoading: boolean;
}

const initialState = { isLoading: false } as AppStateI;

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    showLoading(state) {
      state.isLoading = true;
    },
    hideLoading(state) {
      state.isLoading = false;
    },
  },
});

export const { showLoading, hideLoading } = appSlice.actions;

export const appReducer = appSlice.reducer;
