import { configureStore } from "@reduxjs/toolkit";
import CategoriesSlice from "./categoriesSlice";
import ProductsSlice from "./productsSlice";

const store = configureStore({
  reducer: {
    categoriesStore: CategoriesSlice,
    productsStore: ProductsSlice,
  },
});

export default store;
