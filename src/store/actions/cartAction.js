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
      const { statusText } = await cartAPI.removeCart(cartItemId)
      if (statusText !== "OK") {
        throw new Error()
      }
      dispatch(cartActions.removeCartItem(cartItemId))
      Toast.fire({
        icon: 'success',
        title: '成功刪除商品'
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

export const increaseCartItem = (cartItemId) => {
  return async (dispatch) => {
    try {
      const { statusText } = await cartAPI.increaseCart(cartItemId)
      if (statusText !== "OK") {
        throw new Error()
      }
      dispatch(cartActions.increaseCartItem(cartItemId))
      Toast.fire({
        icon: 'success',
        title: '成功增加商品數量'
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

export const decreaseCartItem = (cartItemId) => {
  return async (dispatch) => {
    try {
      const { statusText } = await cartAPI.decreaseCart(cartItemId)
      if (statusText !== "OK") {
        throw new Error()
      }
      dispatch(cartActions.decreaseCartItem(cartItemId))
      Toast.fire({
        icon: 'success',
        title: '成功減少商品數量'
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