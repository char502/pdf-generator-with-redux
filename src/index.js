import React from "react";
import ReactDOM from "react-dom";
import PdfGenMain from "./components/PdfGenMain";
import ProfessionalServices from "./components/ProfessionalServices";
import NotFoundPage from "./components/NotFoundPage";
// import "./index.css";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Header from "./components/Header";

const Routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={PdfGenMain} exact={true} />
        <Route path="/ProfessionalServices" component={ProfessionalServices} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

// ReactDOM.render(<Routes />, document.getElementById("root"));

ReactDOM.render(Routes, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
