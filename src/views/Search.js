import { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { searchProduct } from '../store/actions/productAction'

import ProductItem from "../components/ProductItem"

import '../styles/home.sass'

const Search = () => {
  const dispatch = useDispatch()
  const { searchKeyword, searchProducts } = useSelector((state) => state.product)

  useEffect(() => {
    dispatch(searchProduct(searchKeyword))
  }, [dispatch, searchKeyword])

  return (
    <Fragment>
      <div className="search">
        {searchProducts.length ? (<h2 className="search-title">使用" {searchKeyword} "搜尋結果為:</h2>) : <h2 className="search-title">使用" {searchKeyword} "無搜尋結果</h2>}
      </div>
      <div className="home">
        {searchProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </Fragment>
  )
}

export default Search