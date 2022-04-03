import { apiHelper } from "../utils/axios";

const cartAPI = {
  getCartItems() {
    return apiHelper.get('/cart')
  },
  addCart(productId) {
    return apiHelper.post(`/cartItem`, { productId })
  }
}

export default cartAPI