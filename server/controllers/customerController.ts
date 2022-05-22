import axios, { AxiosResponse } from 'axios';
import { NextFunction, Request, Response } from 'express';

const URL = 'https://connect.squareupsandbox.com/v2/customers';

export const customerController = {
  getCustomers: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response: AxiosResponse = await axios.get(URL, {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_KEY}`,
          'Content-Type': 'application/json',
        },
      });
      res.locals.customers = response.data.customers;
      next();
    } catch (err) {
      return next({
        log: `customerController.getCustomers ERROR: ${err}`,
        message: { err: 'An error occurred' },
      });
    }
  },
  createCustomer: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response: AxiosResponse = await axios.post(URL, req.body, {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_KEY}`,
          'Content-Type': 'application/json',
        },
      });
      res.locals.customer = response.data.customer;
      next();
    } catch (err) {
      return next({
        log: `customerController.createCustomer ERROR: ${err}`,
        message: { err: 'An error occurred' },
      });
    }
  },
  editCustomer: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response: AxiosResponse = await axios.put(
        `${URL}/${req.params.id}`,
        req.body,
        {
          headers: {
            Authorization: `Bearer ${process.env.ACCESS_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );
      res.locals.customer = response.data.customer;
      next();
    } catch (err) {
      return next({
        log: `customerController.editCustomer ERROR: ${err}`,
        message: { err: 'An error occurred' },
      });
    }
  },
  deleteCustomer: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response: AxiosResponse = await axios.delete(
        `${URL}/${req.params.id}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.ACCESS_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );
      res.locals.customer = response.data.customer;
      next();
    } catch (err) {
      return next({
        log: `customerController.deleteCustomer ERROR: ${err}`,
        message: { err: 'An error occurred' },
      });
    }
  },
};
