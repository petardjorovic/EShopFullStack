import { configureStore } from "@reduxjs/toolkit";
import CategoriesSlice from "./CategoriesSlice";

const store = configureStore({
  reducer: {
    categoriesStore: CategoriesSlice,
  },
});

export default store;
