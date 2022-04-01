import { Fragment } from "react"
import { Link } from 'react-router-dom'

import '../styles/product.sass'

const ProductItem = ({ product }) => {
  return (
    <Fragment>
      <div className="product">
        <div className="product-container">
          <div className="product-head">
            <Link to="/">
              <img className="product-image" src={product.image} alt={product.name} />
              
            </Link>
          </div>
          <div className="product-body">
            <Link to="/" className="product-name"></Link>
            <div className="product-description">XXXXXXX</div>
            <div className="product-price"><span>$</span> QQQQQQQ</div>
            <button className="product-add">加入購物車</button>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ProductItem