import { productActions } from '../slices/productSlice'
import productAPI from '../../apis/product'

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