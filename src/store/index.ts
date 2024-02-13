import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session'; 
import { combineReducers } from '@reduxjs/toolkit';
import { authApi } from '@/store/api/authSlice';
import { productsApi } from '@/store/api/productsSlice';
import { cartApi } from '@/store/api/cartSlice';
import themeSlice from '@/store/states/themeSlice';
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
  version: 1,
  storage,
  blacklist: [authApi.reducerPath] 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authApi.middleware, productsApi.middleware, cartApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
