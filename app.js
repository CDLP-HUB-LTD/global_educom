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

// app.use(
//   cors({
//     origin: (origin, callback) => {
//       if (!origin) return callback(null, true);

//       const allowedOrigins = ['https://globaleducom.vercel.app', 'http://localhost:3000'];
//       if (allowedOrigins.indexOf(origin) === -1) {
//         const msg = 'The CORS policy for this site does not allow access from the specified origin.';
//         return callback(new Error(msg), false);
//       }

//       return callback(null, true);
//     },
//     credentials: true,
//   })
// );

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

// app.options('*', cors());

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