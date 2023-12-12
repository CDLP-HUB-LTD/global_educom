const express = require('express');
const cors = require('cors');
const databaseMiddleware = require('./db');
const fetchRouter = require('./routes/fetch');
const sendRouter = require('./routes/send');
const updateRouter = require('./routes/update');
const eraseRouter = require('./routes/erase');
const connectRouter = require('./routes/connect');

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ['https://globaleducom.vercel.app', 'http://localhost:3000'],
    credentials: true,
  })
);

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Global Educom API',
      version: '1.0.0',
      description: 'The API for Global Educom',
    },
  },
  apis: ['./routes/*.js'],
};

app.options('*', cors());

const databaseMiddleware = (req, res, next) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting database connection:', err);
      return res.status(500).json({ message: 'Internal Server Error' });
    }

    req.db = connection;
    next();
  });
};

app.use(databaseMiddleware);

// Routes
app.use('/', fetchRouter);
app.use('/send', sendRouter);
app.use('/update', updateRouter);
app.use('/erase', eraseRouter);
app.use('/connect', connectRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
