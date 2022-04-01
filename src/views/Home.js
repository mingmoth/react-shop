import { useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/actions/productAction'

import ProductItem from '../components/ProductItem'

import '../styles/home.sass'

const Home = ({ match }) => {
  // let page = match.query.page
  const dispatch = useDispatch()

  const { products } = useSelector((state) => state.product)
  
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div className="home">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div >
  )
}

export default Home