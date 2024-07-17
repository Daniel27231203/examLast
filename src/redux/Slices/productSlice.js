import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  detail: JSON.parse(localStorage.getItem("detail")) || {},
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    addProductSlice(state, action) {
      state.product.push(action.payload);
    },
    getProductSlice(state, action) {
      state.product = action.payload;
    },
    getDetail(state, action) {
      let res = action.payload;
      state.detail = res;
      localStorage.setItem("detail", JSON.stringify(res));
    },
  },
});
export const { addProductSlice, getProductSlice, getDetail } =
  productSlice.actions;
export default productSlice.reducer;
