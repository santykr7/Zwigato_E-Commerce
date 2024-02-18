import { createSlice } from "@reduxjs/toolkit"

const CartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    addToCart: (state, action) => {
      //for existing item or to increase qty when add same product
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      )

      if (existingItem) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        )
      } else {
        state.cart.push(action.payload)
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id)
    },

    increaseQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
      )
    },
    decreaseQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
      )
    },
  },
})

export const { addToCart, removeFromCart, increaseQty, decreaseQty } =
  CartSlice.actions

export default CartSlice.reducer
