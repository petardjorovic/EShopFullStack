import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    currentCategory: "All Products",
  },
  reducers: {
    saveAllProducts: (state, action) => {
      state.products = action.payload;
    },
    setNewCategoryAction: (state, action) => {
      state.currentCategory = action.payload;
    },
  },
});

export const { saveAllProducts, setNewCategoryAction } = productsSlice.actions;
export default productsSlice.reducer;
