import { configureStore } from '@reduxjs/toolkit';
import calendarReducer from '../features/counter/Counter.js'; 
export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
  },
});