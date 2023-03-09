import express from 'express';
import cors from 'cors';
import apiRouter from './api/api-router.js';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json('server is up!');
});
app.use(express.json());

app.use('/api/v1', apiRouter);

export default app;
