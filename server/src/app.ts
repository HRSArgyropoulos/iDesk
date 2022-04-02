import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

// to get request body in POST requests
app.use(express.json());

// CORS for cross origin requests
app.use(cors());
// DB connection
require('./db/connection');

// routes
app.use('/', routes);

app.listen(process.env.PORT, () => {
  console.log(`Service listening on port ${process.env.PORT}`);
});
