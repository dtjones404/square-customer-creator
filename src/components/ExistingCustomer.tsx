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
    <div className="flex flex-col gap-2 flex-1">
      <Searchbar
        searchTerm={searchTerm}
        handleSearchTermChange={handleSearchTermChange}
      />
      <div className="border-2 bg-white rounded-lg max-h-[700px] overflow-y-scroll shadow-xl flex flex-col">
        {!customerData.length ? (
          <div className="text-xl py-24 font-bold flex flex-col gap-2 justify-center items-center">
            <FontAwesomeIcon
              className="text-4xl text-rose-500 mr-2"
              icon={faPersonCircleQuestion}
            />
            <h2 className="text-2xl text-center">No customers found.</h2>
          </div>
        ) : (
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
                  emailUnsubscribed={
                    customerData.preferences.email_unsubscribed
                  }
                  handleDelete={() => handleDelete(customerData.id)}
                  handleEdit={() => handleEdit(customerData)}
                />
              </TransitionWrapper>
            ))}
          </TransitionGroup>
        )}
      </div>
    </div>
  );
}
