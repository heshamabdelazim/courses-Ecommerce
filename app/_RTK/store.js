const { configureStore } = require("@reduxjs/toolkit");
import CategorySlice from "./slices/Category";
import CartSlice from "./slices/Cart";

export const myStore = configureStore({
  reducer: {
    cart: CartSlice,
    category: CategorySlice,
  },
});
