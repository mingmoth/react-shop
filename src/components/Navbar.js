import { Fragment } from "react"
import { Outlet, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Fragment>
      <div className="nav-container">
        <Link to="/">My JEANS</Link> |  
        <Link to="/login">Login</Link>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navbar