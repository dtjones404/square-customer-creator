import axios, { AxiosResponse } from 'axios';
import Fuse from 'fuse.js';
import { useEffect, useState } from 'react';
import CustomerForm from '../components/CustomerForm';
import ExistingCustomer from '../components/ExistingCustomer';
import Loading from '../components/Loading';
import { ISquareCustomer } from '../types/squareCustomer';

export default function CustomerWrapper() {
  const [customerData, setCustomerData] = useState([] as ISquareCustomer[]);
  const [isLoading, setIsLoading] = useState(true);
  const [editId, setEditId] = useState(null as string | null);
  const [formData, setFormData] = useState({} as ISquareCustomer);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([] as ISquareCustomer[]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const getSearchResult = () => {
      const fuse = new Fuse(customerData, {
        shouldSort: true,
        keys: ['email_address', 'given_name', 'family_name'],
      });
      if (!searchTerm.length) return [...customerData];

      const result = fuse.search(searchTerm);
      const resultArr = result.map((res) => res.item);
      return resultArr;
    };
    // timeout prevents component from responding immediately to keystrokes (looks too busy)
    const timeout = setTimeout(() => setSearchResults(getSearchResult()), 400);

    // clear timeout on cleanup to prevent race conditions
    return () => clearTimeout(timeout);
  }, [searchTerm, customerData]);

  const fetchData = async () => {
    const response: AxiosResponse = await axios.get('/api/customer');
    setCustomerData(response.data);
    setSearchResults([...response.data]);
    setIsLoading(false);
  };
  const handleSubmit = async (formData: ISquareCustomer) => {
    if (editId) {
      const response: AxiosResponse = await axios.put(
        `/api/customer/${editId}`,
        formData
      );
      if (response.status === 200)
        setCustomerData((oldState) => [
          response.data,
          ...oldState.filter((customer) => customer.id !== editId),
        ]);
    } else {
      const response = await axios.post('/api/customer', formData);
      if (response.status === 200)
        setCustomerData((oldState) => [response.data, ...oldState]);
    }
    setEditId(null);
    setFormData({} as ISquareCustomer);
  };
  const handleDelete = async (customerId: string) => {
    const response = await axios.delete(`/api/customer/${customerId}`);
    if (response.status === 200)
      setCustomerData((oldState) =>
        oldState.filter((customer) => customer.id !== customerId)
      );
  };
  const handleEdit = (customerData: ISquareCustomer) => {
    setEditId(customerData.id);
    setFormData(customerData);
  };
  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-10 ">
        <CustomerForm handleSubmit={handleSubmit} formData={formData} />
        {isLoading ? (
          <Loading />
        ) : (
          <ExistingCustomer
            customerData={searchResults}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            searchTerm={searchTerm}
            handleSearchTermChange={handleSearchTermChange}
          />
        )}
      </div>
    </div>
  );
}
