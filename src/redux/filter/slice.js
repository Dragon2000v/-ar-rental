import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterValues: {},
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, { payload }) {
      state.filterValues = { ...payload };
    },
    clearFilter(state) {
      state.filterValues = {};
    },
  },
});
export const { setFilter, clearFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
