import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '@/store/api/authSlice';
import { productsApi } from '@/store/api/productsSlice';
import {categoriesApi} from '@/store/api/categoriesSlice'

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(productsApi.middleware)
      .concat(categoriesApi.middleware), 
});
