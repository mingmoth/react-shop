import { cartActions } from "../slices/cartSlice";
import cartAPI from '../../apis/cart'
import { Toast } from '../../utils/toast'

export const getCartItems = () => {
  return async (dispatch) => {
    try {
      const { statusText, data } = await cartAPI.getCartItems()
      if (statusText !== "OK") {
        throw new Error()
      }
      dispatch(cartActions.getCart(data.cart.items))
      dispatch(cartActions.getTotalPrice(data.totalPrice))
    } catch (error) {
      console.log(error)
      Toast.fire({
        icon: 'error',
        title: error.message
      })
    }
  }
}

export const addCartItem = (productId) => {
  return async () => {
    try {
      const { data, statusText } = await cartAPI.addCart(productId)
      if (statusText !== "OK") {
        throw new Error()
      }
      Toast.fire({
        icon: 'success',
        title: data.message
      })
    } catch (error) {
      console.log(error)
      Toast.fire({
        icon: 'error',
        title: error.message
      })
    }
  }
}

export const removeCartItem = (cartItemId) => {
  return async (dispatch) => {
    try {
      const { data, statusText } = await cartAPI.removeCart(cartItemId)
      if (statusText !== "OK") {
        throw new Error()
      }
      dispatch(cartActions.removeCartItem(cartItemId))
      Toast.fire({
        icon: 'success',
        title: '成功刪除購物車商品'
      })
      console.log(data)
    } catch (error) {
      console.log(error)
      Toast.fire({
        icon: 'error',
        title: error.message
      })
    }
  }
}