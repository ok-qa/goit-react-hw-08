import { Form, Formik, Field } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

import css from "./LoginForm.module.css";

export default function LoginForm() {
  const dispath = useDispatch();
  const handleSubmit = (values, actions) => {
    dispath(login(values));
    // .unwrap()
    // .then((data) => console.log(data))
    // .catch((error) => console.error(error));
    actions.resetForm();
  };
  return (
    <div className={css.formWrapper}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label>Email</label>
          <Field className={css.field} type="email" name="email"></Field>
          <label>Password</label>
          <Field className={css.field} type="password" name="password"></Field>
          <button className={css.button} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
}
