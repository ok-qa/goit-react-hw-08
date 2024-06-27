import { useSelector } from "react-redux";
import { getError, getIsLoading } from "../../redux/selectors";
import { getFilteredContacts } from "../../redux/contactsSlice";
import Loader from "../Loader/Loader";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

// import { selectNameFilter } from "../../redux/filtersSlice";
// import { selectContacts } from "../../redux/contactsSlice";
// import { fetchContacts } from "../../redux/contactsOps";

const ContactList = () => {
  const visibleContacts = useSelector(getFilteredContacts);
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  return (
    <ul className={css.contactList}>
      {isLoading && !error ? (
        <Loader />
      ) : visibleContacts.length === 0 && !error ? (
        <p>
          Your Phonebook is empty. Start filling it in by adding your first
          contact
        </p>
      ) : (
        visibleContacts.map(({ id, name, number }) => (
          <Contact key={id} id={id} name={name} number={number} />
        ))
      )}
    </ul>
  );
};

export default ContactList;
