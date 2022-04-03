import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Toast } from '../utils/toast'

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, currentUser } = useSelector((state) => state.user)
  
  if (isAuthenticated && currentUser.id){
    return children
  } else {
    Toast.fire({
      icon: 'warning',
      title: '請先登入後再使用相關功能'
    })
    return <Navigate to="/signin" />
  }
}
export default PrivateRoute