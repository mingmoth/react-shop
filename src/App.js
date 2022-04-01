import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//components
import Navbar from './components/Navbar'
import Home from './views/Home'
import Login from './views/Login'

import './styles/App.sass';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
