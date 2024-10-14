import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modalSlice from "./slices/modalSLice";
import cartSlice from "./slices/cartSlice";
import productsReducer from "./slices/productsSlice";
import categoriesReducer from "./slices/categorySlice";

const mainReducer = combineReducers({
  products: productsReducer,
  modal: modalSlice,
  cart: cartSlice,
  categories: categoriesReducer,
});
const store = configureStore({
  reducer: mainReducer,
});

export default store;
