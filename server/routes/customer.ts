import express from 'express';
import { customerController } from '../controllers/customerController';

export const customerRouter = express.Router();

customerRouter.get('/', customerController.getCustomers, (req, res) => {
  res.json(res.locals.customers);
});

customerRouter.post('/', customerController.createCustomer, (req, res) => {
  res.json(res.locals.customer);
});

customerRouter.put('/:id', customerController.editCustomer, (req, res) => {
  res.json(res.locals.customer);
});

customerRouter.delete('/:id', customerController.deleteCustomer, (req, res) => {
  res.json(res.locals.customer);
});
