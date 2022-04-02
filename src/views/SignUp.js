import { Fragment, useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { signupUser } from '../store/actions/userAction'

import '../styles/auth.sass'

const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!name.trim() || !email || !password || !passwordCheck) {
      alert('尚有空白欄位未填寫')
      return
    }
    if(password !== passwordCheck) {
      alert('兩次輸入的密碼不同')
      setPasswordCheck('')
      return
    }
    console.log('submit')
    try {
      const result = await dispatch(signupUser({ name, email, password, passwordCheck }))
      if(result) {
        navigate('/signin')
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
          <h1 className="auth-title">加入 My JEANS</h1>
          <div className="auth-unit">
            <label htmlFor="name" className="auth-label">名稱</label>
            <input id="name" name="name" type="text" placeholder="Name" className="auth-input" onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="auth-unit">
            <label htmlFor="email" className="auth-label">電子郵件</label>
            <input id="email" name="email" type="email" placeholder="Email" className="auth-input" onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="auth-unit">
            <label htmlFor="password" className="auth-label">密碼</label>
            <input id="password" name="password" type="password" placeholder="Password" className="auth-input" onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="auth-unit">
            <label htmlFor="passwordCheck" className="auth-label">密碼確認</label>
            <input id="passwordCheck" name="passwordCheck" type="password" placeholder="Password" className="auth-input" onChange={(e) => setPasswordCheck(e.target.value)}/>
          </div>
          <button type="submit" className="auth-submit">註冊</button>
          <div className="auth-signup">返回<Link to="/signin" className="auth-signup-link">登入</Link>頁面</div>
        </form>
      </div>
    </Fragment>
  )
}

export default SignUp