import { ErrorMessage, Field, Form, Formik } from 'formik';
import { ISquareCustomer } from '../types/squareCustomer';

interface IFormData {
  email_address?: string;
  given_name?: string;
  family_name?: string;
}

interface ICustomerFormProps {
  handleSubmit: Function;
  formData: ISquareCustomer;
}

const defaultFormValues = {
  email_address: '',
  given_name: '',
  family_name: '',
};

const styles = {
  label: 'block text-gray-700 text-sm font-bold pt-2 pb-1',
  field:
    'bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none',
  error: 'text-red-500 text-sm',
};

export default function CustomerForm({
  handleSubmit,
  formData,
}: ICustomerFormProps) {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-lg font-bold mx-auto">Add / Edit Customer:</h1>
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
            errors.email_address = 'Invalid email address';
          }
          if (!values.given_name) {
            errors.given_name = 'Required';
          }
          if (!values.family_name) {
            errors.family_name = 'Required';
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          handleSubmit(values);
          setSubmitting(false);
          resetForm({ values: defaultFormValues });
        }}
      >
        {({ isSubmitting }: { isSubmitting: boolean }) => (
          <Form className="border-2 flex flex-col p-8 w-full rounded-lg shadow-xl bg-white">
            <label className={styles.label} htmlFor="email_address">
              Email
            </label>
            <Field
              className={styles.field}
              type="email_address"
              name="email_address"
            />
            <ErrorMessage
              className={styles.error}
              name="email_address"
              component="div"
            />
            <label className={styles.label} htmlFor="given_name">
              First Name
            </label>
            <Field className={styles.field} type="text" name="given_name" />
            <ErrorMessage
              className={styles.error}
              name="given_name"
              component="div"
            />
            <label className={styles.label} htmlFor="family_name">
              Last Name
            </label>
            <Field className={styles.field} type="text" name="family_name" />
            <ErrorMessage
              className={styles.error}
              name="family_name"
              component="div"
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 transition-colors py-2 px-4 shadow-lg text-white font-bold rounded mt-2"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
