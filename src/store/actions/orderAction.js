import orderAPI from '../../apis/order'
import { Toast } from '../../utils/toast'

export const getTradeInfo = (orderData) => {
  return async () => {
    try {
      const { data } = await orderAPI.postTradeInfo(orderData)
      if(data.status !== 'success') {
        throw new Error()
      }
      Toast.fire({
        icon: 'success',
        title: data.message
      })
      return data.tradeInfo
    } catch (error) {
      console.log(error)
      Toast.fire({
        icon: 'error',
        title: error.message
      })
    }
  }
}