import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import Customer from './Customer';
import { ISquareCustomer } from './types/squareCustomer';

export default function ExistingCustomer() {
  const [customerData, setCustomerData] = useState([] as ISquareCustomer[]);
  const fetchData = async () => {
    const response: AxiosResponse = await axios.get('/api/customer');
    console.log(response.data);
    setCustomerData(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {customerData.map(
        ({
          id,
          given_name,
          created_at,
          preferences: { email_unsubscribed },
        }) => (
          <Customer
            key={id}
            givenName={given_name}
            createdAt={new Date(created_at)}
            emailUnsubscribed={email_unsubscribed}
          />
        )
      )}
    </div>
  );
}
