import { useSelector } from "react-redux";
import {
  selectEmail,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from "./redux/auth/auth-selectors";
import { Navigate } from "react-router-dom";

const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const email = useSelector(selectEmail);
  return {
    isLoggedIn,
    isRefreshing,
    user,
    email,
  };
};

const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  // component - RegisterPage or LoginPage
  const { isLoggedIn } = useAuth(); // isLoggedIn - true or false
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component; // if isLoggedIn is true, then redirect to redirectTo, else render Component
};

//   ({ component, redirectTo }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   return isLoggedIn ? <Navigate to={redirectTo} /> : component;
// };

export default RestrictedRoute;
