import { Fragment } from "react"
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { removeCartItem, increaseCartItem, decreaseCartItem } from "../store/actions/cartAction"

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch()

  const removeCart = (e) => {
    e.preventDefault()
    dispatch(removeCartItem(cartItem.cartItemId))
  }
  const increaseCart = (e) => {
    e.preventDefault()
    dispatch(increaseCartItem(cartItem.cartItemId))
  }
  const decreaseCart = (e) => {
    e.preventDefault()
    dispatch(decreaseCartItem(cartItem.cartItemId))
  }

  return (
    <Fragment>
      <div className="cart-item">
        <div className="cart-head">
          <Link to={`/product/${cartItem.id}`}>
            <img className="cart-image" src={cartItem.image} alt={cartItem.name} />
          </Link>
        </div>
        <div className="cart-body">
          <div className="cart-info">
            <Link to={`/product/${cartItem.id}`}><h3 className="cart-title">{cartItem.name}</h3></Link>
            
            <div className="cart-description">{cartItem.description}</div>
            <div className="cart-count">
              {cartItem.quantity > 1 && <div className="cart-minus" onClick={decreaseCart}>-</div>}
              <div className="cart-quantity">{cartItem.quantity}</div>
              <div className="cart-plus" onClick={increaseCart}>+</div>
            </div>
            <button className="cart-remove" onClick={removeCart}>移除</button>
            <div className="cart-price">$ {cartItem.price*cartItem.quantity}</div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default CartItem