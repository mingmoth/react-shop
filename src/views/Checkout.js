import { Fragment, useState } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

import '../styles/checkout.sass'

const Checkout = () => {
  const { currentUser } = useSelector((state) => state.user)
  const { totalPrice, cartCount } = useSelector((state) => state.cart)

  const [name, setName] = useState(currentUser.name)
  const [email, setEmail] = useState(currentUser.email)
  const [address, setAddress] = useState('')
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
              <input id="name" name="name" type="text" placeholder="名稱" className="checkout-input" value={name} onChange={(e) => {setName(e.target.value)}}/>
            </div>
            <div className="checkout-unit">
              <label htmlFor="email" className="checkout-label">購買人電子郵件</label>
              <input id="email" name="email" type="email" placeholder="Email" className="checkout-input" value={email} onChange={(e) => { setEmail(e.target.value) }}/>
            </div>
            <div className="checkout-unit">
              <label htmlFor="address" className="checkout-label">購買人地址</label>
              <input id="address" name="address" type="text" placeholder="地址" className="checkout-input" onChange={(e) => { setAddress(e.target.value) }}/>
            </div>
            <button className="checkout-btn">確認購買</button>
            <Link to="/cart"><button className="checkout-back">回上一步</button></Link>
          </div>
        </div>
        
      </div>
    </Fragment>
  )
}

export default Checkout