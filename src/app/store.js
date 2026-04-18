import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/Counter.js'; 
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});