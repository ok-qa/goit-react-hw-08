import { useSelector } from "react-redux";
import {
  selectEmail,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from "./redux/auth/selectors";
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

const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  // component - ContactsPage
  const { isLoggedIn, isRefreshing } = useAuth(); // isLoggedIn - true or false
  const shouldRedirect = !isLoggedIn && !isRefreshing; // if isLoggedIn is false and isRefreshing is false, then shouldRedirect is true
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component; // if shouldRedirect is true, then redirect to redirectTo, else render Component
};

//   ({ component, redirectTo }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   return isLoggedIn ? component : <Navigate to={redirectTo} />;
// };

export default PrivateRoute;
