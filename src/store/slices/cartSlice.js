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
      state.cartItems = state.cartItems.map(cart => {
        return cart = {
          ...cart,
          cartItemId: cart.CartItem.id,
          quantity: cart.CartItem.quantity
        }
      })
    },
    getTotalPrice: (state, action) => {
      state.totalPrice = action.payload
    },
    removeCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(cart => cart.cartItemId !== action.payload)
      state.totalPrice = 0
      state.cartItems.forEach((cart) => {
        state.totalPrice += (cart.price * cart.quantity)
      })
    }
  }
})

export const cartActions = cartSlice.actions

export default cartSlice