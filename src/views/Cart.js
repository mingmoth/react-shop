import { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCartItems } from "../store/actions/cartAction"
import CartItem from "../components/CartItem"

import '../styles/cart.sass'

const Cart = () => {
  const dispatch = useDispatch()
  const { cartItems, totalPrice } = useSelector((state) => state.cart)

  useEffect(() => {
    dispatch(getCartItems())
  }, [dispatch])

  return (
    <Fragment>
      <div className="cart-container">
        <h2 className="cart-title">購物列表</h2>
        <div className="cart-wrapper">
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
        <div className="cart-total">
          <h3 className="cart-amount">總金額: $ {totalPrice}</h3>
          <button className="cart-checkout">送出購物車</button>
        </div>
      </div>
    </Fragment>
  )
}

export default Cart