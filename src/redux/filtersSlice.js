import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      const newName = action.payload;
      state.name = newName;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const selectNameFilter = (state) => state.filters.name;

export default filterSlice.reducer;
