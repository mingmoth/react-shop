import { Fragment, useState } from "react"
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { loginUser } from '../store/actions/userAction'
import { Toast } from '../utils/toast'

import '../styles/auth.sass'

const SignIn = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!email.trim() || !password) {
      Toast.fire({
        icon: 'warning',
        title: '請填入 電子郵件 和 密碼'
      })
      return
    }
    try {
      const result = await dispatch(loginUser({ email, password }))
      if(result) {
        Toast.fire({
          icon: 'success',
          title: '成功登入'
        })
        navigate('/')
      } else {
        throw new Error()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Fragment>
      <div className="auth">
        <form className="auth-wrapper" onSubmit={handleSubmit}>
          <h1 className="auth-title">登入 My JEANS</h1>
          <div className="auth-unit">
            <label htmlFor="email" className="auth-label">電子郵件</label>
            <input id="email" name="email" type="email" placeholder="Email" className="auth-input" onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="auth-unit">
            <label htmlFor="password" className="auth-label">密碼</label>
            <input id="password" name="password" type="password" placeholder="Password" className="auth-input" onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <button type="submit" className="auth-submit">登入</button>
          <div className="auth-signup">還沒有加入My JEANS? 立即<Link to="/signup" className="auth-signup-link">註冊</Link></div>
        </form>
      </div>
    </Fragment>
  )
}

export default SignIn