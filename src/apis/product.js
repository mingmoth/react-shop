import { apiHelper } from "../utils/axios";

const productAPI = {
  getProducts() {
    // const serachParams = new URLSearchParams({ page })
    return apiHelper.get(`/products`)
  },
  getProduct(productId) {
    return apiHelper.get(`/product/${productId}`)
  },
  searchProducts(keyword) {
    return apiHelper.post('/search/product', keyword)
  }
}

export default productAPI