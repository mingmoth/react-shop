import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, currentUser } = useSelector((state) => state.user)
  
  if (isAuthenticated && currentUser.id){
    return children
  } else {
    alert('請先登入')
    return <Navigate to="/signin" />
  }
}
export default PrivateRoute