import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    // Дія збереження (додавання)
    addItem: (state, action) => {
      state.push(action.payload);
    },
    // Дія видалення
    removeItem: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
    // Дія оновлення
    updateItem: (state, action) => {
      const index = state.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
  },
});

export const { addItem, removeItem, updateItem } = itemsSlice.actions;
export const selectItems = (state) => state.items;
export default itemsSlice.reducer;