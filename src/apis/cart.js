import { apiHelper } from "../utils/axios";

const cartAPI = {
  getCartItems() {
    return apiHelper.get('/cart')
  }
}

export default cartAPI