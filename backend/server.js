const express = require("express");

const { MongoClient, ServerApiVersion } = require("mongodb");
const connectDB = require('./config/db')


const router = require("./routes/goalRoutes");

const app = express();

const bodyParser = require("body-parser");

const { errorHandler } = require("./middleware/errorMiddleware");

require("dotenv").config();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connectDB()

app.use("/api/goals", require("./routes/goalRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
