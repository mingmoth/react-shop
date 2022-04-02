import { Fragment } from "react"
import { Link } from 'react-router-dom'

import '../styles/auth.sass'

const SignIn = () => {
  return (
    <Fragment>
      <div className="auth">
        <form className="auth-wrapper">
          <h1 className="auth-title">登入 My JEANS</h1>
          <div className="auth-unit">
            <label htmlFor="email" className="auth-label">電子郵件</label>
            <input id="email" name="email" type="email" placeholder="Email" className="auth-input"/>
          </div>
          <div className="auth-unit">
            <label htmlFor="password" className="auth-label">密碼</label>
            <input id="password" name="password" type="password" placeholder="Password" className="auth-input" />
          </div>
          <button type="submit" className="auth-submit">登入</button>
          <div className="auth-signup">還沒有加入My JEANS? 立即<Link to="/signup" className="auth-signup-link">註冊</Link></div>
        </form>
      </div>
    </Fragment>
  )
}

export default SignIn