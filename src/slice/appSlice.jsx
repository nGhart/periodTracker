import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entries: [
    { startDate: '2023-09-05', endDate: '2023-09-10', id: '23432frE@2' },
  ],
};
const entriesSlice = createSlice({
  name: 'entries',
  initialState,
  reducers: {
    addEntry: (state, action) => {
      state.entries = [...state.entries, action.payload];
    },
    editEntry: (state, action) => {
      state.entries = state.entries.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload.updatedEntry;
        }
        return item;
      });
    },
  },
});
export const { addEntry, editEntry } = entriesSlice.actions;
export default entriesSlice.reducer;
