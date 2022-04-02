import { userActions } from '../slices/userSlice'
import userAPI from '../../apis/authorization'

export const loginUser = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const { data, statusText } = await userAPI.signin({ email, password })
      if(data.status !== 'success' || statusText !== 'OK') {
        throw new Error()
      }
      localStorage.setItem('userToken', data.token)
      console.log(data.user)
      dispatch(userActions.loginUser(data.user))
      return true
    } catch (error) {
      console.log(error)
      alert('找不到使用者資訊，請稍後再試')
      return false
    }
  }
}