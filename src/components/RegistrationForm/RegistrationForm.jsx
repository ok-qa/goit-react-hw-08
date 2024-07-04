import { Form, Formik, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    actions.resetForm();
  };

  return (
    <div className={css.formWrapper}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          {/* <img
            className={css.img}
            src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
            alt="profile image"
          /> */}
          <label>Username</label>
          <Field className={css.field} type="text" name="name"></Field>
          <label>Email</label>
          <Field className={css.field} type="email" name="email"></Field>
          <label>Password</label>
          <Field className={css.field} type="password" name="password"></Field>
          <button className={css.button} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}
