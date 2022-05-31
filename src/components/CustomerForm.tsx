import { ErrorMessage, Field, Form, Formik } from 'formik';
import { object, string } from 'yup';
import { ISquareCustomer } from '../types/squareCustomer';

const defaultFormValues = {
  email_address: '',
  given_name: '',
  family_name: '',
};

const styles = {
  form: 'border-2 flex flex-col p-8 w-full rounded-lg shadow-xl bg-white',
  label: 'block text-gray-700 text-sm font-bold pt-2 pb-1',
  field: `rounded bg-slate-100 focus:ring-blue-200/70 focus:bg-white focus:ring-4 invalid:ring-red-300/70 invalid:ring-4`,
  error: 'text-pink-600 text-sm',
  submitButton: `bg-blue-600 hover:bg-blue-800 transition-colors py-2 px-4 shadow-lg
     text-white font-bold rounded mt-4`,
};

const formSchema = object({
  email_address: string().required('Required').email('Invalid email'),
  given_name: string().required('Required'),
  family_name: string().required('Required'),
});

interface ICustomerFormProps {
  handleSubmit: Function;
  formData: ISquareCustomer;
}

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
        validationSchema={formSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          handleSubmit(values);
          setSubmitting(false);
          resetForm({ values: defaultFormValues });
        }}
      >
        {({ isSubmitting }: { isSubmitting: boolean }) => (
          <Form className={styles.form}>
            <label className={styles.label} htmlFor="email_address">
              Email
            </label>
            <Field
              className={styles.field}
              type="email"
              name="email_address"
              id="email_address"
              spellCheck="false"
            />
            <ErrorMessage
              className={styles.error}
              name="email_address"
              component="div"
            />
            <label className={styles.label} htmlFor="given_name">
              First Name
            </label>
            <Field
              className={styles.field}
              type="text"
              name="given_name"
              id="given_name"
              spellCheck="false"
            />
            <ErrorMessage
              className={styles.error}
              name="given_name"
              component="div"
            />
            <label className={styles.label} htmlFor="family_name">
              Last Name
            </label>
            <Field
              className={styles.field}
              type="text"
              name="family_name"
              id="family_name"
              spellCheck="false"
            />
            <ErrorMessage
              className={styles.error}
              name="family_name"
              component="div"
            />
            <button
              className={styles.submitButton}
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
