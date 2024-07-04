import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";
import css from "./App.module.css";

const HomePage = lazy(() => import("./pages/Home/HomePage"));
const ContactsPage = lazy(() => import("./pages/Phonebook/PhonebookPage"));
const RegisterPage = lazy(() =>
  import("./pages/Registration/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/Login/LoginPage"));

const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>Getting you to your destination</div>
  ) : (
    <Layout>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} registerTo="/login" />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute component={<RegisterPage />} registerTo="/" />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                registerTo="/contacts"
              />
            }
          />
        </Routes>
      </Suspense>
    </Layout>
  );

  //  (
  //   <div className={css.container}>
  //     <h1>Phonebook</h1>
  //     <ContactForm />
  //     <SearchBox />
  //     {isLoading && <Loader />}
  //     {isError && <ErrorMessage />}
  //     <ContactList />
  //   </div>
  // );
};

export default App;
