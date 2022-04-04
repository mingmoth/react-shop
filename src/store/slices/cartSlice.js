import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    cartCount: 0,
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
      state.cartItems.forEach(cart => {
        state.cartCount+=cart.quantity
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
    },
    increaseCartItem: (state, action) => {
      state.cartItems = state.cartItems.map(cart => {
        if(cart.cartItemId === action.payload) {
          state.totalPrice += cart.price
          return cart = {
            ...cart,
            quantity: cart.quantity + 1
          }
        } else {
          return cart
        }
      })
    },
    decreaseCartItem: (state, action) => {
      state.cartItems = state.cartItems.map(cart => {
        if (cart.cartItemId === action.payload) {
          state.totalPrice -= cart.price
          return cart = {
            ...cart,
            quantity: cart.quantity - 1
          }
        } else {
          return cart
        }
      })
    }
  }
})

export const cartActions = cartSlice.actions

export default cartSlice