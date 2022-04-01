import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getProducts } from '../store/actions/productAction'

import ProductItem from '../components/ProductItem'

import '../styles/home.sass'

const Home = ({ match }) => {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  })

  return (
    <div className="home">
      
    </div >
  )
}

export default Home