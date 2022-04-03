import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from './store/actions/userAction'

//components
import Navbar from './components/Navbar'
import Home from './views/Home'
import SignIn from './views/SignIn'
import SignUp from './views/SignUp';
import Product from './views/Product'

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
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
