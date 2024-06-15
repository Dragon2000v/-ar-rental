import { configureStore } from '@reduxjs/toolkit';
import { catalogReducer } from './catalog/slice';
import { filterReducer } from './filter/slice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const catalogPersistConfig = {
  key: 'catalog',
  storage,
  whitelist: ['favoritesId'],
};

const filterPersistConfig = {
  key: 'filter',
  storage,
  whitelist: ['filterValues'],
};

export const store = configureStore({
  reducer: {
    catalog: persistReducer(catalogPersistConfig, catalogReducer),
    filter: persistReducer(filterPersistConfig, filterReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: import.meta.env.MODE !== 'production',
});

export const persistor = persistStore(store);
