// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import certificateReducer from './certificateSlice';

export const store = configureStore({
  reducer: {
    certificates: certificateReducer,
  },
});
