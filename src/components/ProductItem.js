import { Fragment } from "react"
import { Link } from 'react-router-dom'

import '../styles/product.sass'

const ProductItem = ({ product }) => {
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
            <button className="product-add">加入購物車</button>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ProductItem