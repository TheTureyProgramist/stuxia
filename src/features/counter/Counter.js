import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customDays: [],
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    addCustomDay: (state, action) => {
      const { id, date, time, reason, duration, durationUnit, cardId } = action.payload;
      state.customDays.push({
        id: id || Date.now(),
        date,
        time: time || "00:00",
        reason,
        duration: duration || 1,
        durationUnit: durationUnit || "hours",
        cardId: cardId || "all"
      });
    },
    removeCustomDay: (state, action) => {
      state.customDays = state.customDays.filter(
        (d) => d.id !== action.payload
      );
    },
    updateCustomDay: (state, action) => {
      const { date, reason } = action.payload;
      const day = state.customDays.find((d) => d.date === date);
      if (day) {
        day.reason = reason;
      }
    },
    setCustomDays: (state, action) => {
      state.customDays = action.payload;
    },
  },
});

export const { addCustomDay, removeCustomDay, updateCustomDay, setCustomDays } =
  calendarSlice.actions;
export default calendarSlice.reducer;
