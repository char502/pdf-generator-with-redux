import React from "react";
import ReactDOM from "react-dom";
import IndexRouter from "./routers/IndexRouter";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
// import PdfGenMain from "./components/PdfGenMain";
// import ProfessionalServices from "./components/ProfessionalServices";
// import NotFoundPage from "./components/NotFoundPage";
import "./css/index.css";
// import App from "./App";
// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
// import Header from "./components/Header";

//Bootstrap
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/css/bootstrap.min.css";

const routerAndStore = (
  <Provider>
    <IndexRouter />
  </Provider>
);

// ReactDOM.render(<Routes />, document.getElementById("root"));

ReactDOM.render(routerAndStore, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
