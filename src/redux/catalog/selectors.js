import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filter/selectors';

export const selectCurrentCar = state => state.catalog.currentCar;
export const selectFavoriteCarsIds = state => state.catalog.favoritesId;
export const selectLastPage = state => state.catalog.lastPage;
export const selectCatalog = state => state.catalog.items;
export const selectLoading = state => state.catalog.loading;
export const selectError = state => state.catalog.error;

export const selectFavoriteCars = createSelector(
  [selectCatalog, selectFavoriteCarsIds],
  (cars, ids) => {
    return cars.filter(car => ids.includes(car.id));
  }
);

export const selectFilteredCars = createSelector(
  [selectCatalog, selectFilter],
  (cars, { brand, perHour, min, max }) => {
    let result = [...cars];
    if (brand) {
      result = [...result.filter(car => car.make === brand)];
    }
    if (perHour) {
      result = [
        ...result.filter(car => Number(car.rentalPrice.slice(1)) <= perHour),
      ];
    }
    if (min) {
      result = [...result.filter(car => car.mileage >= min)];
    }
    if (max) {
      result = [...result.filter(car => car.mileage <= max)];
    }
    return result;
  }
);
