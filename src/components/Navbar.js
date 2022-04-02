import { Fragment, useState } from "react"
import { Outlet, Link } from 'react-router-dom'

import '../styles/navbar.sass'

const Navbar = () => {
  const [toggled, setToggled] = useState(false)
  const toggleList = () => {
    setToggled(!toggled)
  }
  return (
    <Fragment>
      <nav>
        <div className="nav-container">
          <Link to="/" className="nav-logo">My JEANS</Link>
          <div className="search-container">
            <input type="text" name="search" id="search" placeholder="開始搜尋" />
            <button></button>
          </div>
          <div className={`nav-toggle ${ toggled? 'nav-toggled': '' }`} onClick={toggleList}>
            <div className="nav-ham"></div>
          </div>
          {toggled && (
            <div className="nav-options">
              <Link to="/" className="nav-options-item">後臺管理</Link>
              <Link to="/" className="nav-options-item">購物車</Link>
              <Link to="/" className="nav-options-item">訂單列表</Link>
              <Link to="/signin" className="nav-options-item">登出</Link>
              <Link to="/signin" className="nav-options-item">登入</Link>
              <Link to="/signup" className="nav-options-item">註冊</Link>
            </div>
          )}
          
        </div>
      </nav>
      <Outlet />
    </Fragment>
  )
}

export default Navbar