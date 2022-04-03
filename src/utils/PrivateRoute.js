import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest}) => {
  const { isAuthenticated, currentUser } = useSelector((state) => state.user)
  
  return (
    <Route 
      {...rest}
      render={(props) => {
        if(isAuthenticated && currentUser.id) {
          return  <Component {...props} />
        }
        return <Redirect to="/signin" />
      }}
    />
  )
}

export default PrivateRoute