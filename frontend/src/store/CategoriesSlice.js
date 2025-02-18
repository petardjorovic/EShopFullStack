import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
  },
  reducers: {
    saveAllCategories: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { saveAllCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
