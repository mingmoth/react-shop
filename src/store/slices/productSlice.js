import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    product: {},
  },
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload.products.rows
    },
    getProduct: (state, action) => {
      state.product = action.payload
    },
  },
})

export const productActions = productSlice.actions

export default productSlice

