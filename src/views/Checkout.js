import { Fragment, useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getTradeInfo } from "../store/actions/orderAction"

import '../styles/checkout.sass'
import { Toast } from "../utils/toast"

const Checkout = () => {
  const dispatch = useDispatch()
  const { currentUser } = useSelector((state) => state.user)
  const { totalPrice, cartCount } = useSelector((state) => state.cart)

  const [name, setName] = useState(currentUser.name)
  const [email, setEmail] = useState(currentUser.email)
  const [address, setAddress] = useState('')
  const [tradeInfo, setTradeInfo] = useState({})

  const submitTradeInfo = async (e) => {
    e.preventDefault()
    if (!name || !email || !address) {
      Toast.fire({
        icon: 'warning',
        title: '尚有欄位未填寫'
      })
      return
    }
    try {
      const orderData = {
        amount: totalPrice,
        address: address,
        name: name,
        email: email,
        cartId: currentUser.id
      }
      const tradeInformation = await dispatch(getTradeInfo(orderData))
      if (tradeInformation) {
        setTradeInfo(tradeInformation)
      } else {
        throw new Error()
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Fragment>
      <div className="checkout-container">
        <h2 className="checkout-title">確認購買資訊</h2>
        <div className="checkout-wrapper">
          <div className="checkout-summary">
            <h3 className="summary-title">訂單摘要</h3>
            <div className="summary-count">數量總計 : {cartCount}</div>
            <div className="summary-price">結帳總金額 :  <span className="summary-totalPrice">$ {totalPrice}</span></div>
          </div>
          <div className="checkout-info">
            <h3 className="info-title">購改人資訊</h3>
            <div className="checkout-unit">
              <label htmlFor="name" className="checkout-label">購買人名稱</label>
              <input id="name" name="name" type="text" placeholder="名稱" className="checkout-input" value={name} onChange={(e) => { setName(e.target.value) }} />
            </div>
            <div className="checkout-unit">
              <label htmlFor="email" className="checkout-label">購買人電子郵件</label>
              <input id="email" name="email" type="email" placeholder="Email" className="checkout-input" value={email} onChange={(e) => { setEmail(e.target.value) }} />
            </div>
            <div className="checkout-unit">
              <label htmlFor="address" className="checkout-label">購買人地址</label>
              <input id="address" name="address" type="text" placeholder="地址" className="checkout-input" onChange={(e) => { setAddress(e.target.value) }} />
            </div>
            <div>
              {!tradeInfo.MerchantID ? (
                <Fragment>
                  <button className="checkout-btn" onClick={submitTradeInfo} >確認購買</button>
                  <Link to="/cart"><button className="checkout-back">回上一步</button></Link>
                </Fragment>
              ) : (
                <Fragment>
                  <form className="tradeform" name="Spgateway" action={tradeInfo.PayGateWay} method="POST">
                    <input type="text" name="MerchantID" className="tradeInfo" defaultValue={tradeInfo.MerchantID} />
                    <input type="text" name="TradeInfo" className="tradeInfo" defaultValue={tradeInfo.TradeInfo} />
                    <input type="text" name="TradeSha" className="tradeInfo" defaultValue={tradeInfo.TradeSha} />
                    <input type="text" name="Version" className="tradeInfo" defaultValue={tradeInfo.Version} />
                    {tradeInfo.MerchantID && <button className="checkout-payment" >前往付款頁面</button>}
                    {tradeInfo.MerchantID && <Link to="/cart"><button className="checkout-back">回上一步</button></Link>}
                  </form>
                </Fragment>
              )}
            </div>
            
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Checkout