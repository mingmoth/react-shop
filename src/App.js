import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from './store/actions/userAction'

// route
import PrivateRoute from './utils/PrivateRoute';

//components
import Navbar from './components/Navbar'
import Home from './views/Home'
import SignIn from './views/SignIn'
import SignUp from './views/SignUp';
import Product from './views/Product'
import Cart from './views/Cart'
import Checkout from './views/Checkout'

import './styles/App.sass';


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('userToken')
    if(token) {
      dispatch(getCurrentUser())
    }
  }, [dispatch])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<PrivateRoute>
            <Cart />
          </PrivateRoute>} />
          <Route path="/checkout" element={<PrivateRoute>
            <Checkout />
          </PrivateRoute>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
