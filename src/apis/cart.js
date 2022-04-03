import { apiHelper } from "../utils/axios";

const cartAPI = {
  getCartItems() {
    return apiHelper.get('/cart')
  },
  addCart(productId) {
    return apiHelper.post(`/cartItem`, { productId })
  },
  removeCart(cartItemId) {
    return apiHelper.put('/cartItem/del', { cartItemId })
  },
  increaseCart(cartItemId) {
    return apiHelper.put('/cartItem/add', { cartItemId })
  },
  decreaseCart(cartItemId) {
    return apiHelper.put('/cartItem/sub', { cartItemId })
  }
}

export default cartAPI