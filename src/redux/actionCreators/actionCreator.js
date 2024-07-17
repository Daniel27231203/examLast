import {
  addProductSlice,
  getProductSlice,
} from "../../redux/Slices/productSlice";
import axios from "axios";
let API = `https://api.elchocrud.pro/api/v1/1c05bd21038f8754d1a65487d2ca1ffc/myOrganic`;

export function addProduct(newProduct) {
  return async (dispatch) => {
    const { data } = await axios.post(API, newProduct);
    dispatch(addProductSlice(data));
  };
}

export function getProduct() {
  return async (dispatch) => {
    const { data } = await axios.get(API);
    dispatch(getProductSlice(data));
  };
}
