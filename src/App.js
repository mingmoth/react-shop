import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//components
import Navbar from './components/Navbar'
import Home from './views/Home'
import SignIn from './views/SignIn'
import SignUp from './views/SignUp';
import Product from './views/Product'

import './styles/App.sass';


function App() {
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
