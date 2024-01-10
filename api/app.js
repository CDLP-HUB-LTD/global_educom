const express = require("express");
const session = require("express-session");
const cors = require("cors");
const fetchRouter = require("./routes/fetch");
const sendRouter = require("./routes/send");
const updateRouter = require("./routes/update");
const eraseRouter = require("./routes/erase");
const connectRouter = require("./routes/connect");

const app = express();

const dbConfig = {
  host: "demowordpress.vtudomain.com",
  user: "demo_admin",
  password: "Demo_Admin",
  database: "demo_api"
};

app.use(cors({
  origin: ["https://globaleducom.vercel.app", "http://localhost:3000"],
  credentials: true,
}));

app.use(express.json());
app.use(session({
  secret: "gdte73",
  resave: false,
  saveUninitialized: false,
}));

app.use((req, res, next) => {
  req.dbConfig = dbConfig;
  next();
});

app.use("/", fetchRouter);
app.use("/send", sendRouter);
app.use("/update", updateRouter);
app.use("/erase", eraseRouter);
app.use("/connect", connectRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
