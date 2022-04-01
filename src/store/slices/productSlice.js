import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {},
  reducers: {
    getProducts: (state) => {},
    getProduct: (state) => {},
  },
})

export const productActions = productSlice.actions

export default productSlice

