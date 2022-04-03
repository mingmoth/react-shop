import { Fragment } from "react"
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { removeCartItem } from "../store/actions/cartAction"

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch()

  const removeCart = (e) => {
    e.preventDefault()
    dispatch(removeCartItem(cartItem.CartItem.id))
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
              <div className="cart-num">-</div>
              <div className="cart-quantity">{cartItem.CartItem.quantity}</div>
              <div className="cart-num">+</div>
            </div>
            <button className="cart-remove" onClick={removeCart}>移除</button>
            <div className="cart-price">$ {cartItem.price}</div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default CartItem