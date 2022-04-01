import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
  },
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload.products.rows
    },
    getProduct: (state) => {},
  },
})

export const productActions = productSlice.actions

export default productSlice

