import { configureStore } from "@reduxjs/toolkit";
import productSlice, { addProductSlice } from "./Slices/productSlice";

export const store = configureStore({
  reducer: {
    pro: productSlice,
  },
});
