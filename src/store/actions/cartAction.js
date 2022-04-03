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