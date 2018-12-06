const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

const SELECT_ALL_SOWS_QUERY = "SELECT * FROM sows.product_familes";

// const LINKED_TABLE_CHECK_QUERY =
//   "USE sows; SELECT product_family AS Product_Family, product_config AS Product_config FROM product_familes, product_configs WHERE idprod_family = product_familes_idprod_family ORDER BY product_config;";

const connection = mysql.createConnection({
  connectionLimit: 100,
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

app.get("/sows/add", (req, res) => {
  const { product_family } = req.query;
  // console.log(product_family);
  const INSERT_PRODUCT_FAMILY_QUERY = `INSERT INTO product_familes (product_family) VALUES('${product_family}')`;
  connection.query(INSERT_PRODUCT_FAMILY_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send("successfully added product family");
    }
  });
  // res.send("adding product family");
});

app.get("/sows", (req, res) => {
  connection.query(SELECT_ALL_SOWS_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results
      });
    }
  });
});

app.listen(4000, () => {
  console.log("SOWs server listening on port 4000");
});
