import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchAllThunk, fetchPageThunk } from './operations';
import { toast } from 'react-toastify';
import { limitForPage } from '../../helpers/mockAPI';

const initialState = {
  items: [],
  loading: false,
  error: null,
  currentCar: null,
  favoritesId: [],
  lastPage: null,
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    addCurrentCar(state, { payload }) {
      state.currentCar = payload;
    },
    removeCurrentCar(state) {
      state.currentCar = null;
    },
    addFavoriteCar(state, { payload }) {
      state.favoritesId.push(payload);
      toast.success(`Car id:${payload} added to favorites!`);
    },
    removeFavoriteCar(state, { payload }) {
      state.favoritesId = state.favoritesId.filter(id => id !== payload);
      toast.success(`Car id:${payload} removed from favorites!`);
    },
    clearCatalog(state) {
      state.items = [];
      state.lastPage = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPageThunk.fulfilled, (state, { payload }) => {
        if (payload.length > 0) {
          state.items.push(...payload);
        }
        if (payload.length === 0 || payload.length < limitForPage) {
          state.lastPage = true;
        }
      })
      .addMatcher(isAnyOf(fetchAllThunk.fulfilled), (state, { payload }) => {
        if (payload.length > 0) {
          state.lastPage = true;
          state.items = [...payload];
        }
      })

      .addMatcher(
        isAnyOf(fetchPageThunk.pending, fetchAllThunk.pending),
        state => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(fetchPageThunk.fulfilled, fetchAllThunk.fulfilled),
        state => {
          state.loading = false;
          state.error = null;
        }
      )
      .addMatcher(isAnyOf(fetchPageThunk.rejected), state => {
        state.loading = false;
        state.error = true;
        toast.error('Something went wrong!');
      });
  },
});

export const catalogReducer = catalogSlice.reducer;
export const {
  addCurrentCar,
  removeCurrentCar,
  addFavoriteCar,
  removeFavoriteCar,
  clearCatalog,
} = catalogSlice.actions;
