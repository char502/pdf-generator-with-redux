import React from "react";
import ReactDOM from "react-dom";
import IndexRouter from "./routers/IndexRouter";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store/configureStore";
import "./css/index.css";
import { addForm } from "./redux/actions/pdfGenActions";

//database test
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

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

const store = configureStore();

store.dispatch(addForm({ id: 67 }));

const routerAndStore = (
  <Provider store={store}>
    <IndexRouter />
  </Provider>
);

console.log(store.getState());
// ReactDOM.render(<Routes />, document.getElementById("root"));

ReactDOM.render(routerAndStore, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
