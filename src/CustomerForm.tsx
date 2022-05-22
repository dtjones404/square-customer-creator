import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { ISquareCustomer } from './types/squareCustomer';

interface IFormData {
  email_address?: string;
  firstName?: string;
  lastName?: string;
}

interface ICustomerFormProps {
  handleSubmit: Function;
  editId: string | null;
  formData: ISquareCustomer;
}

export default function CustomerForm({
  handleSubmit,
  editId,
  formData,
}: ICustomerFormProps) {
  return (
    <div className="formContainer">
      <h1>Add / Edit Customer:</h1>
      <Formik
        enableReinitialize
        initialValues={{
          email_address: formData.email_address,
          given_name: formData.given_name,
          family_name: formData.family_name,
        }}
        validate={(values) => {
          const errors: IFormData = {};
          if (!values.email_address) {
            errors.email_address = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
              values.email_address
            )
          ) {
            errors.email_address = 'Invalid email_address address';
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          handleSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }: { isSubmitting: boolean }) => (
          <Form>
            <Field type="email_address" name="email_address" />
            <ErrorMessage name="email_address" component="div" />
            <Field type="text" name="given_name" />
            <ErrorMessage name="given_name" component="div" />
            <Field type="text" name="family_name" />
            <ErrorMessage name="family_name" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
