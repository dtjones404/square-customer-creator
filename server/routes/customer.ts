import express from 'express';
import { customerController } from '../controllers/customerController';

export const customerRouter = express.Router();

customerRouter.get('/', customerController.getCustomers, (req, res) => {
  res.json(res.locals.customers);
});
