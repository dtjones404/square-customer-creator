import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import { customerRouter } from './routes/customer';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/customer', customerRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build/')));
}

app.use('/customers', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
