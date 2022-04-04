import { apiHelper } from "../utils/axios";

const orderAPI = {
  postTradeInfo(data) {
    return apiHelper.post('/order', data)
  }
}

export default orderAPI