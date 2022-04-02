import { Fragment } from "react"

const Product = () => {
  return (
    <Fragment>
      <div className="detail-container">
        <div className="detail-head">
          <div className="detail-image">
            <img className="detail-photo" src="{}" alt="" />
          </div>
        </div>
        <div className="detail-body">
          <div className="detail-name"></div>
          <div className="detail-price"></div>
          <div className="detail-description"></div>
          <button className="detail-add">加入購物車</button>
        </div>
      </div>
    </Fragment>
  )
}

export default Product