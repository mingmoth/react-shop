import { userActions } from '../slices/userSlice'
import userAPI from '../../apis/authorization'

export const loginUser = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const { data, statusText } = await userAPI.signin({ email, password })
      if(data.status !== 'success' || statusText !== 'OK') {
        throw new Error(data.message)
      }
      localStorage.setItem('userToken', data.token)
      dispatch(userActions.loginUser(data.user))
      return true
    } catch (error) {
      console.log(error)
      alert(error.message)
      return false
    }
  }
}

export const signupUser = ({ name, email, password, passwordCheck }) => {
  return async () => {
    try {
      const { data, statusText } = await userAPI.signup({ name, email, password, passwordCheck })
      if (data.status !== 'success' || statusText !== 'OK') {
        throw new Error(data.message)
      }
      return true
    } catch (error) {
      console.log(error)
      alert(error.message)
      return false
    }
  }
}

export const getCurrentUser = () => {
  return async (dispatch) => {
    try {
      const { data, statusText } = await userAPI.getCurrentUser()
      if (statusText !== 'OK') {
        throw new Error()
      }
      console.log(data)
      dispatch(userActions.loginUser(data))
    } catch (error) {
      console.log(error.message)
    }
  }
}

export const logoutUser = () => {
  return (dispatch) => {
    dispatch(userActions.logoutUser())
  }
}