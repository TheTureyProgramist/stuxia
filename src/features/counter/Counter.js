import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  customDays: [],
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    addCustomDay: (state, action) => {
      const { date, reason } = action.payload;
      const exists = state.customDays.find(d => d.date === date);
      if (!exists) {
        state.customDays.push({ date, reason });
      }
    },
    removeCustomDay: (state, action) => {
      state.customDays = state.customDays.filter(d => d.date !== action.payload);
    },
    updateCustomDay: (state, action) => {
      const { date, reason } = action.payload;
      const day = state.customDays.find(d => d.date === date);
      if (day) {
        day.reason = reason;
      }
    },
    setCustomDays: (state, action) => {
      state.customDays = action.payload;
    },
  },
});

export const { addCustomDay, removeCustomDay, updateCustomDay, setCustomDays } = calendarSlice.actions;
export default calendarSlice.reducer;
