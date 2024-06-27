import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import css from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <div className={css.contactItem}>
        <div>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 -2 32 28"
          >
            <path d="M23.797 20.922c-0.406-2.922-1.594-5.516-4.25-5.875-1.375 1.5-3.359 2.453-5.547 2.453s-4.172-0.953-5.547-2.453c-2.656 0.359-3.844 2.953-4.25 5.875 2.172 3.063 5.75 5.078 9.797 5.078s7.625-2.016 9.797-5.078zM20 10c0-3.313-2.688-6-6-6s-6 2.688-6 6 2.688 6 6 6 6-2.688 6-6zM28 14c0 7.703-6.25 14-14 14-7.734 0-14-6.281-14-14 0-7.734 6.266-14 14-14s14 6.266 14 14z"></path>
          </svg>
          {name}
        </div>

        <div>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 -2 32 28"
            className="icon"
          >
            <path d="M20 18.641c0-0.078 0-0.172-0.031-0.25-0.094-0.281-2.375-1.437-2.812-1.687-0.297-0.172-0.656-0.516-1.016-0.516-0.688 0-1.703 2.047-2.312 2.047-0.313 0-0.703-0.281-0.984-0.438-2.063-1.156-3.484-2.578-4.641-4.641-0.156-0.281-0.438-0.672-0.438-0.984 0-0.609 2.047-1.625 2.047-2.312 0-0.359-0.344-0.719-0.516-1.016-0.25-0.438-1.406-2.719-1.687-2.812-0.078-0.031-0.172-0.031-0.25-0.031-0.406 0-1.203 0.187-1.578 0.344-1.031 0.469-1.781 2.438-1.781 3.516 0 1.047 0.422 2 0.781 2.969 1.25 3.422 4.969 7.141 8.391 8.391 0.969 0.359 1.922 0.781 2.969 0.781 1.078 0 3.047-0.75 3.516-1.781 0.156-0.375 0.344-1.172 0.344-1.578zM24 6.5v15c0 2.484-2.016 4.5-4.5 4.5h-15c-2.484 0-4.5-2.016-4.5-4.5v-15c0-2.484 2.016-4.5 4.5-4.5h15c2.484 0 4.5 2.016 4.5 4.5z"></path>
          </svg>
          {number}
        </div>
      </div>
      <button
        className={css.deleteButton}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};

// Contact.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
// };

export default Contact;
