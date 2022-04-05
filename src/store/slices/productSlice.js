import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    product: {},
    searchKeyword: '',
    searchProducts: []
  },
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload.products.rows
    },
    getProduct: (state, action) => {
      state.product = action.payload
    },
    setKeyword: (state, action) => {
      state.searchKeyword = action.payload
    },
    getSearchProducts: (state, action) => {
      state.searchProducts = action.payload
    }
  },
})

export const productActions = productSlice.actions

export default productSlice

