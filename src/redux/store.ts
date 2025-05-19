import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { getPersistConfig } from 'redux-deep-persist';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './reducers';

const persistConfig = getPersistConfig({
  key: 'root',
  storage,
  whitelist: ['auth'],
  rootReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

export type RootStateT = ReturnType<typeof store.getState>;

export type AppDispatchT = typeof store.dispatch;
