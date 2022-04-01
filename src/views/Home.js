
import { Link } from 'react-router-dom'

// import Login from './Login'

import logo from '../logo.svg';


const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="login">Login</Link>
      </header>
    </div >
  )
}

export default Home