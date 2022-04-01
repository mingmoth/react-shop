import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="Home">
      <h1>Home</h1>
      <Link to="login">Login</Link>

    </div >
  )
}

export default Home