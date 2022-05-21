import CustomerForm from './CustomerForm';
import ExistingCustomer from './ExistingCustomer';

export default function CustomerWrapper() {
  return (
    <div>
      <CustomerForm />
      <ExistingCustomer />
    </div>
  );
}
