import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    //.matches(/^\d{3}-\d{2}-\d{2}$/, "Number must be in format 123-45-67")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        id: nanoid(),
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      {({ isValid, dirty }) => (
        <Form className={css.form}>
          <div className={css.formBox}>
            <label>Name</label>
            <Field type="text" name="name" className={css.formInput} />
            <ErrorMessage name="name" component="span" className={css.span} />

            <label>Number</label>
            <Field type="text" name="number" className={css.formInput} />
            <ErrorMessage name="number" component="span" className={css.span} />

            <button
              type="submit"
              className={css.btn}
              disabled={!(isValid && dirty)}
            >
              Add contact
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
