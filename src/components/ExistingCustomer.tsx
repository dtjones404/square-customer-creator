import { TransitionGroup } from 'react-transition-group';
import Customer from './Customer';
import { ISquareCustomer } from '../types/squareCustomer';
import TransitionWrapper from './TransitionWrapper';
import Searchbar from './Searchbar';

interface IExistingCustomerProps {
  customerData: ISquareCustomer[];
  handleDelete: Function;
  handleEdit: Function;
  searchTerm: string;
  handleSearchTermChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ExistingCustomer({
  customerData,
  handleDelete,
  handleEdit,
  searchTerm,
  handleSearchTermChange,
}: IExistingCustomerProps) {
  return (
    <div className="flex flex-col gap-2 flex-1">
      <Searchbar
        searchTerm={searchTerm}
        handleSearchTermChange={handleSearchTermChange}
      />
      <div className="border-2 rounded-lg max-h-[700px] overflow-y-scroll shadow-xl">
        <TransitionGroup>
          {customerData.map((customerData) => (
            <TransitionWrapper
              key={customerData.id}
              timeout={300}
              classNames="customerCard"
            >
              <Customer
                givenName={customerData.given_name}
                familyName={customerData.family_name}
                emailAddress={customerData.email_address}
                createdAt={new Date(customerData.created_at)}
                emailUnsubscribed={customerData.preferences.email_unsubscribed}
                handleDelete={() => handleDelete(customerData.id)}
                handleEdit={() => handleEdit(customerData)}
              />
            </TransitionWrapper>
          ))}
        </TransitionGroup>
      </div>
    </div>
  );
}
