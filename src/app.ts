import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json('server is up!');
});
app.use(express.json());

app.use('/api/v1', () => {});

export default app;
