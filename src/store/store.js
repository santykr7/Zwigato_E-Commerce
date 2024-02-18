import { configureStore } from "@reduxjs/toolkit"
import CartSlice from "./slices/CartSlice"
import categorySlice from "./slices/categorySlice"

export const store = configureStore({
  reducer: {
    cart: CartSlice,
    category: categorySlice,
  },
})
