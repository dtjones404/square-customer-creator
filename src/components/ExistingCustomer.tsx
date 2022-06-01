import { TransitionGroup } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion } from '@fortawesome/free-solid-svg-icons';
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
    <div className="flex-1 bg-white dark:bg-stone-800 rounded-lg max-h-[700px] shadow-xl flex flex-col">
      <Searchbar
        searchTerm={searchTerm}
        handleSearchTermChange={handleSearchTermChange}
      />
      {!customerData.length ? (
        <div className="flex-1 py-24 text-xl border-2 rounded-lg font-bold flex flex-col gap-2 justify-center items-center">
          <FontAwesomeIcon
            className="text-4xl text-rose-500"
            icon={faPersonCircleQuestion}
          />
          <h2 className="text-2xl text-center">No customers found.</h2>
        </div>
      ) : (
        <TransitionGroup className="overflow-y-scroll border-2 rounded-lg">
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
      )}
    </div>
  );
}
