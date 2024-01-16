import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '@/store/api/authSlice';
import { productsApi } from '@/store/api/productsSlice';
import { cartApi } from '@/store/api/cartSlice';
import themeSlice from '@/store/others/themeSlice';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    theme: themeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(productsApi.middleware)
      .concat(cartApi.middleware),
});
