const express = require('express');
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const databaseMiddleware = require("./db");
const fetchRouter = require('./routes/fetch');
const sendRouter = require('./routes/send');
const updateRouter = require("./routes/update");
const eraseRouter = require("./routes/erase");
const connectRouter = require('./routes/connect');

const app = express();

app.use(cors({
  origin: 'https://globaleducom.vercel.app',
  credentials: true,
}));


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


app.use(databaseMiddleware);

const specs = swaggerJsdoc(options);

// Routes
app.use('/', fetchRouter);
app.use('/docs/send', cors(), sendRouter); 
app.use('/docs/update', cors(), updateRouter);
app.use('/docs/erase', cors(), eraseRouter);
app.use('/connect', connectRouter);



app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


