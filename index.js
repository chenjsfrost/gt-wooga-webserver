const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const mongoose = require("mongoose");

const port = 3031;
const config = require("./config");

const rateRouter = require("./routes/rate");
const qnsRouter = require("./routes/question");
const responseRouter = require("./routes/response");

app.use(logger("dev"));

const dbUrl = config.dbUrl;

var options = {
  keepAlive: 1,
  connectTimeoutMS: 30000,
};

mongoose.connect(dbUrl, options, (err) => {
  if (err) console.log(err);
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/rates", rateRouter);
app.use("/questions", qnsRouter);
app.use("/responses", responseRouter);


app.listen(port, () => {
  console.log("Running on " + port);
});
module.exports = app;