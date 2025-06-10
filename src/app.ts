import express from 'express';
import 'reflect-metadata';
import cors from 'cors';
import transactionRoutes from './routes/transaction.routes';

const app = express();
app.use(cors()); 

app.use(express.json());
app.use('/transactions', transactionRoutes);

export default app;
