import { configureStore } from "@reduxjs/toolkit"
import CartSlice from "./slices/CartSlice"
import categorySlice from "./slices/categorySlice"
import searchSlice from "./slices/searchSlice"

export const store = configureStore({
  reducer: {
    cart: CartSlice,
    category: categorySlice,
    search: searchSlice,
  },
})
