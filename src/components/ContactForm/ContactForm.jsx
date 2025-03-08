import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import css from "./ContactForm.module.css";

const contactValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Enter name!"),
  number: Yup.string()
    .matches(/^\d+$/, "Only numbers!")
    .min(3, "Too short!")
    .max(15, "Too long!")
    .required("Enter a phone number!"),
});

const initialValues = {
  name: "",
  number: "",
};

export default function ContactForm({ onAdd }) {
  const handleSubmit = (values, actions) => {
    onAdd(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactValidationSchema}
    >
      <Form className={css.form}>
        <div className={css.field}>
          <label className={css.label}>Name</label>
          <Field className={css.input} type="text" name="name"></Field>
          <ErrorMessage name="name">
            {(msg) => <span className={css.msg}>{msg}</span>}
          </ErrorMessage>
        </div>

        <div className={css.field}>
          <label className={css.label}>Number</label>
          <Field className={css.input} type="tel" name="number"></Field>
          <ErrorMessage name="number">
            {(msg) => <span className={css.msg}>{msg}</span>}
          </ErrorMessage>
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
