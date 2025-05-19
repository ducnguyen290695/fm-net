import { combineReducers } from '@reduxjs/toolkit';
import { appReducer } from './app-reducers';

export const rootReducer = combineReducers({
  app: appReducer,
});
