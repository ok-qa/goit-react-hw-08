import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/auth-operations";
import {
  selectEmail,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectToken,
  selectUser,
} from "./redux/auth/auth-selectors";
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";
import Loader from "./components/Loader/Loader";
// import css from "./App.module.css";

const HomePage = lazy(() => import("./pages/Home/HomePage"));
const ContactsPage = lazy(() => import("./pages/Phonebook/PhonebookPage"));
const RegisterPage = lazy(() =>
  import("./pages/Registration/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/Login/LoginPage"));

const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const email = useSelector(selectEmail);
  const token = useSelector(selectToken);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    email,
    token,
  };
};

const App = () => {
  const { isRefreshing, token } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(refreshUser());
    }
  }, [dispatch]);

  console.log(token);

  return isRefreshing ? (
    <Loader />
  ) : (
    // <div>Getting you to your destination</div>
    <Layout>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute component={<RegisterPage />} redirectTo="/" />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
