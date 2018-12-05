const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

const SELECT_ALL_SOWS_QUERY = "SELECT * FROM sows.product_familes";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "SqlCharlie12345",
  database: "sows"
});

connection.connect(err => {
  if (err) {
    return err;
  }
});

console.log(connection);

app.use(cors());

app.get("/", (req, res) => {
  res.send("go to /sows to see sows");
});

app.get("/sows", (req, res) => {});

app.listen(4000, () => {
  console.log("Products server listening on port 4000");
});
