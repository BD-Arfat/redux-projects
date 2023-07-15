import { configureStore } from '@reduxjs/toolkit';
import { apiSlices } from '../features/Api/ApiSlice';

export const store = configureStore({
  reducer: {
    [apiSlices.reducerPath] : apiSlices.reducer
  },
  middleware : (getDefaultMiddleware) =>getDefaultMiddleware().concat(apiSlices.middleware)
});
