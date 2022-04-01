import { productActions } from '../slices/productSlice'
import productAPI from '../../apis/product'

export const getProducts = () => {
  return async () => {
    try {
      const response = await productAPI.getProducts()
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
}