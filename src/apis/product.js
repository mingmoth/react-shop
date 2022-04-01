import { apiHelper } from "../utils/axios";

const productAPI = {
  getProducts() {
    // const serachParams = new URLSearchParams({ page })
    return apiHelper.get(`/products`)
  },
  getProduct(productId) {
    return apiHelper.get(`/product/${productId}`)
  }
}

export default productAPI