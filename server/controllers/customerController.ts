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
      console.log(response.data, new Date().toLocaleTimeString());
      res.locals.customers = response.data.customers;
      next();
    } catch (err) {
      return next({
        log: `customerController.getCustomers ERROR: ${err}`,
        message: { err: 'An error occurred' },
      });
    }
  },
};
