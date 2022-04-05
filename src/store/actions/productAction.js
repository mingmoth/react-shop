import { productActions } from '../slices/productSlice'
import productAPI from '../../apis/product'
import { Toast } from '../../utils/toast'

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const { statusText, data } = await productAPI.getProducts()
      if(statusText !== "OK") {
        throw new Error()
      }
      dispatch(productActions.getProducts(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const getProduct = (productId) => {
  return async (dispatch) => {
    try {
      const { data, statusText } = await productAPI.getProduct(productId)
      if (statusText !== "OK") {
        throw new Error()
      }
      dispatch(productActions.getProduct(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const searchProduct = (keyword) => {
  return async (dispatch) => {
    try {
      const { data, statusText } = await productAPI.searchProducts({
        keyword: keyword
      })
      if (statusText !== 'OK') {
        throw new Error(data.message)
      }
      dispatch(productActions.getSearchProducts(data))
    } catch (error) {
      Toast.fire({
        icon: 'error',
        title: error.message
      })
    }
  }
}