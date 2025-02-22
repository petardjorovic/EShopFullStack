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
  },
});

export const { saveAllProducts } = productsSlice.actions;
export default productsSlice.reducer;
