import React from "react";
import ReactDOM from "react-dom";
import PdfGenMain from "./components/PdfGenMain";
import ProfessionalServices from "./components/ProfessionalServices";
// import "./index.css";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route } from "react-router-dom";

const Routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={PdfGenMain} />
      <Route path="/ProfessionalServices" component={ProfessionalServices} />
    </div>
  </BrowserRouter>
);

// ReactDOM.render(<Routes />, document.getElementById("root"));

ReactDOM.render(<PdfGenMain />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
