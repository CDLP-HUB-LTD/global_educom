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

app.use(databaseMiddleware);

const specs = swaggerJsdoc(options);

// Routes
app.use('/', fetchRouter);
app.use('/docs/send', sendRouter); 
app.use('/docs/update', updateRouter);
app.use('/docs/erase', eraseRouter);
app.use('/connect', connectRouter);


app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


