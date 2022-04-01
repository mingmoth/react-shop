import { apiHelper } from "../utils/axios";

const productAPI = {
  getProducts({ page }) {
    const serachParams = new URLSearchParams({ page })
    return apiHelper.get(`/products?${serachParams.toString()}`)
  },
  getProduct(productId) {
    return apiHelper.get(`/product/${productId}`)
  }
}

export default productAPI