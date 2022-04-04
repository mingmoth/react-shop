import { Fragment, useState } from "react"
import { Outlet, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../store/actions/userAction'

import '../styles/navbar.sass'

const Navbar = () => {
  const dispatch = useDispatch()
  const { isAuthenticated, currentUser }  = useSelector((state) => state.user)

  const [toggled, setToggled] = useState(false)

  const toggleList = () => {
    setToggled(!toggled)
  }

  const logout = () => {
    localStorage.removeItem('userToken')
    setToggled(!toggled)
    dispatch(logoutUser())
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
              {currentUser.role === 'admin' && <Link to="/" className="nav-options-item" onClick={toggleList}>後臺管理</Link>}
              <Link to="/cart" className="nav-options-item" onClick={toggleList} >購物車</Link>
              <Link to="/" className="nav-options-item" onClick={toggleList} >訂單列表</Link>
              {isAuthenticated ? <Link to="/signin" className="nav-options-item" onClick={logout}>登出</Link> : 
                <Fragment>
                  <Link to="/signin" className="nav-options-item" onClick={toggleList} >登入</Link>
                  <Link to="/signup" className="nav-options-item" onClick={toggleList} >註冊</Link>
                </Fragment>
              }
            </div>
          )}
          
        </div>
      </nav>
      <Outlet />
    </Fragment>
  )
}

export default Navbar