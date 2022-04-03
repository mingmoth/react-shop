import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    totalPrice: 0
  },
  reducers: {
    getCart: (state, action) => {
      state.cartItems = action.payload
    },
    getTotalPrice: (state, action) => {
      state.totalPrice = action.payload
    }
  }
})

export const cartActions = cartSlice.actions

export default cartSlice