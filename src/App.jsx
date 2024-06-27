import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ErrorMessage from "./components/ErrorMsg/ErrorMsg";
import Loader from "./components/Loader/Loader";
import { getError, getIsLoading } from "./redux/selectors";
import { fetchContacts } from "./redux/contactsOps";
import css from "./App.module.css";

function App() {
  const isLoading = useSelector(getIsLoading);
  const isError = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <ContactList />
    </div>
  );
}

export default App;
