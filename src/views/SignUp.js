import { Fragment } from "react"
import { Link } from 'react-router-dom'

import '../styles/auth.sass'

const SignUp = () => {
  return (
    <Fragment>
      <div className="auth">
        <form className="auth-wrapper">
          <h1 className="auth-title">加入 My JEANS</h1>
          <div className="auth-unit">
            <label htmlFor="email" className="auth-label">電子郵件</label>
            <input id="email" name="email" type="email" placeholder="Email" className="auth-input" />
          </div>
          <div className="auth-unit">
            <label htmlFor="name" className="auth-label">名稱</label>
            <input id="name" name="name" type="text" placeholder="Name" className="auth-input" />
          </div>
          <div className="auth-unit">
            <label htmlFor="password" className="auth-label">密碼</label>
            <input id="password" name="password" type="password" placeholder="Password" className="auth-input" />
          </div>
          <div className="auth-unit">
            <label htmlFor="passwordCheck" className="auth-label">密碼確認</label>
            <input id="passwordCheck" name="passwordCheck" type="password" placeholder="Password" className="auth-input" />
          </div>
          <button type="submit" className="auth-submit">註冊</button>
          <div className="auth-signup">返回<Link to="/signin" className="auth-signup-link">登入</Link>頁面</div>
        </form>
      </div>
    </Fragment>
  )
}

export default SignUp