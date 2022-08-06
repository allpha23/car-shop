import express from 'express';
import carRouter from './routes/cars';

const app = express();
app.use(express.json());
app.use(carRouter);

export default app;
