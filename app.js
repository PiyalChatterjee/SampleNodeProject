const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const db = mongoose.connect("mongodb://localhost/detailsAPI");
const port = process.env.PORT || 3000;
const Details = require("./models/detailsModel");
const detailsRouter = require('./routes/detailsRouter')(Details)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", detailsRouter);

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
