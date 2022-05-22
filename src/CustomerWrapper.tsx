import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import CustomerForm from './CustomerForm';
import ExistingCustomer from './ExistingCustomer';
import { ISquareCustomer } from './types/squareCustomer';

export default function CustomerWrapper() {
  const [customerData, setCustomerData] = useState([] as ISquareCustomer[]);
  const [editId, setEditId] = useState(null as string | null);
  const [formData, setFormData] = useState({} as ISquareCustomer);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response: AxiosResponse = await axios.get('/api/customer');
    setCustomerData(response.data);
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

  return (
    <div>
      <h1>Square Customer Creator</h1>
      <CustomerForm
        handleSubmit={handleSubmit}
        editId={editId}
        formData={formData}
      />
      <ExistingCustomer
        customerData={customerData}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}
