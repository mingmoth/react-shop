import { Fragment } from "react"

import '../styles/cart.sass'

const Cart = () => {
  return (
    <Fragment>
      <div className="cart-container">
        <h2 className="cart-title">購物列表</h2>
        <div className="cart-wrapper"></div>
        <div className="cart-total">
          <h3 className="cart-amount">總金額: $ </h3>
          <button className="cart-checkout">送出購物車</button>
        </div>
      </div>
    </Fragment>
  )
}

export default Cart