const express = require('express');
const session = require('express-session');
const cors = require('cors');
const fetchRouter = require('./routes/fetch');
const sendRouter = require('./routes/send');
const updateRouter = require('./routes/update');
const eraseRouter = require('./routes/erase');
const connectRouter = require('./routes/connect');
const pool = require('./db'); 

const app = express();

app.use(express.json());

app.use(
  session({
    secret: 'gdte73',
    resave: false,
    saveUninitialized: false,
  })
);


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
  const connection = mysql.createConnection(dbConfig);

  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL Database:', err);
      return res.status(500).json({ message: 'Internal Server Error' });
    }

    console.log('Thread ID:', connection.threadId);

    req.db = connection;

    res.on('finish', () => {
      req.db.end();
    });

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
