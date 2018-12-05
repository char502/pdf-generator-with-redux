// const express = require("express");
// const cors = require("cors");
// const mysql = require("mysql");

// const app = express();

// const SELECT_ALL_SOWS_QUERY = "SELECT * FROM products";

// const Connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "char",
//   database: "sows"
// });

// Connection.connect(err => {
//   if (err) {
//     return err;
//   }
// });

// console.log(connection);

// app.use(cors());

// app.get("/", (req, res) => {
//   res.send("go to /sows to see sows");
// });

// app.get("/sows", (req, res) => {});

// app.listen(3306, () => {
//   console.log("Products server listening on port 3306");
// });

// const express = require("express");
// const cors = require("cors");

// const app = express();

// app.use(cors());

// app.listen(4000, () => {
//   console.log(`Products server listening on port 4000`);
// });

// var mysql = require("mysql"),
//   async = require("async");

// var PRODUCTION_DB = "app_prod_database",
//   TEST_DB = "app_test_database";

// exports.MODE_TEST = "mode_test";
// exports.MODE_PRODUCTION = "mode_production";

// var state = {
//   pool: null,
//   mode: null
// };

// exports.connect = function(mode, done) {
//   state.pool = mysql.createPool({
//     host: "localhost",
//     user: "your_user",
//     password: "some_secret",
//     database: mode === exports.MODE_PRODUCTION ? PRODUCTION_DB : TEST_DB
//   });

//   state.mode = mode;
//   done();
// };

// exports.get = function() {
//   return state.pool;
// };

// exports.fixtures = function(data) {
//   var pool = state.pool;
//   if (!pool) return done(new Error("Missing database connection."));

//   var names = Object.keys(data.tables);
//   async.each(
//     names,
//     function(name, cb) {
//       async.each(
//         data.tables[name],
//         function(row, cb) {
//           var keys = Object.keys(row),
//             values = keys.map(function(key) {
//               return "'" + row[key] + "'";
//             });

//           pool.query(
//             "INSERT INTO " +
//               name +
//               " (" +
//               keys.join(",") +
//               ") VALUES (" +
//               values.join(",") +
//               ")",
//             cb
//           );
//         },
//         cb
//       );
//     },
//     done
//   );
// };

// exports.drop = function(tables, done) {
//   var pool = state.pool;
//   if (!pool) return done(new Error("Missing database connection."));

//   async.each(
//     tables,
//     function(name, cb) {
//       pool.query("DELETE * FROM " + name, cb);
//     },
//     done
//   );
// };

// var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "your_user",
//   password: "some_secret",
//   database: "the_app_database"
// });

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("You are now connected...");

//   connection.query(
//     "CREATE TABLE sow(id int primary key, name verchar(255), age int, address text)",
//     function(err, result) {
//       if (err) throw err;
//       connection.query(
//         "INSERT INTO people (name, age, address) VALUES (?, ?, ?)",
//         ["Mike", "32", "Reading, UK"],
//         function(err, result) {
//           if (err) throw err;
//           connection.query("SELECT * FROM people", function(err, results) {
//             if (err) throw err;
//             console.log(results[0].id);
//             console.log(results[0].name);
//             console.log(results[0].age);
//             console.log(results[0].address);
//           });
//         }
//       );
//     }
//   );
// });
