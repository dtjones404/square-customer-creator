import Customer from './Customer';
import { ISquareCustomer } from '../types/squareCustomer';

interface IExistingCustomerProps {
  customerData: ISquareCustomer[];
  handleDelete: Function;
  handleEdit: Function;
}

export default function ExistingCustomer({
  customerData,
  handleDelete,
  handleEdit,
}: IExistingCustomerProps) {
  return (
    <div className="border-2 flex-1 rounded max-h-[700px] overflow-y-scroll shadow-xl">
      {customerData.map((customerData) => (
        <Customer
          key={customerData.id}
          givenName={customerData.given_name}
          familyName={customerData.family_name}
          emailAddress={customerData.email_address}
          createdAt={new Date(customerData.created_at)}
          emailUnsubscribed={customerData.preferences.email_unsubscribed}
          handleDelete={() => handleDelete(customerData.id)}
          handleEdit={() => handleEdit(customerData)}
        />
      ))}
    </div>
  );
}
