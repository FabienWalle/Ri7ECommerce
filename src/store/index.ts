import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';
import { authApi } from '@/store/api/authSlice';
import { productsApi } from '@/store/api/productsSlice';
import { cartApi } from '@/store/api/cartSlice';
import themeSlice from '@/store/states/themeSlice';
import { combineReducers } from '@reduxjs/toolkit';
import cartSlice from '@/store/states/cart.slice';

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [cartApi.reducerPath]: cartApi.reducer,
  theme: themeSlice,
  cart: cartSlice,
});

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }).concat(authApi.middleware, productsApi.middleware, cartApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;

export const persistor = persistStore(store);
