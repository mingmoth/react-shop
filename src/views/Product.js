import { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"
import { getProduct } from '../store/actions/productAction'

import previousPage from '../assets/angle-left-solid.svg'

const Product = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let { id } = useParams()

  const { product } = useSelector((state) => state.product)

  useEffect(() => {
    dispatch(getProduct(id))
  }, [dispatch, id])

  return (
    <Fragment>
      <div className="detail-container">
        <div className="detail-head">
          <div className="detail-image">
            <div className="detail-back" onClick={() => navigate(-1)}>
              <img src={previousPage} alt="previousPage" className="detail-back-img"></img>
            </div>
            <img className="detail-photo" src={product.image} alt="" />
          </div>
        </div>
        <div className="detail-body">
          <div className="detail-name">{product.name} </div>
          <div className="detail-price"><span>$ </span>{product.price} </div>
          <div className="detail-description">{product.description} </div>
          <button className="detail-add">加入購物車</button>
        </div>
      </div>
    </Fragment>
  )
}

export default Product