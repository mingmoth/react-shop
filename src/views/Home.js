import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/actions/productAction'

import ProductItem from '../components/ProductItem'

import '../styles/home.sass'

const Home = () => {
  const dispatch = useDispatch()

  const { product, user } = useSelector((state) => state)
  const { products } = product
  const { isAuthenticated, currentUser } = user
  
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