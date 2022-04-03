import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/actions/productAction'

import ProductItem from '../components/ProductItem'

import '../styles/home.sass'

const Home = () => {
  const dispatch = useDispatch()

  const { products } = useSelector((state) => state.product)
  const { isAuthenticated, currentUser } = useSelector((state) => state.user)
  
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