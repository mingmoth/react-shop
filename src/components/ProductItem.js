import { Fragment } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { addCartItem } from '../store/actions/cartAction'
import { Toast } from '../utils/toast'

import '../styles/product.sass'

const ProductItem = ({ product }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isAuthenticated, currentUser } = useSelector((state) => state.user)

  const addCart = (e) => {
    e.preventDefault()
    if (!isAuthenticated || !currentUser) {
      Toast.fire({
        icon: 'warning',
        title: '請先登入後再加入商品'
      })
      navigate('/signin')
    }
    dispatch(addCartItem(product.id))
  }

  return (
    <Fragment>
      <div className="product">
        <div className="product-container">
          <div className="product-head">
            <Link to={`/product/${product.id}`}>
              <img className="product-image" src={product.image} alt={product.name} />
            </Link>
          </div>
          <div className="product-body">
            <Link to={`/product/${product.id}`} className="product-name">{product.name}</Link>
            <div className="product-description">{product.description}</div>
            <div className="product-price"><span>$</span> {product.price}</div>
            <button className="product-add" onClick={addCart} >加入購物車</button>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ProductItem