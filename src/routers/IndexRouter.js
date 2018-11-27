import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import PdfGenMain from "../components/PdfGenMain";
import ProfessionalServices from "../components/ProfessionalServices";
import NotFoundPage from "../components/NotFoundPage";

const IndexRouter = () => (
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

export default IndexRouter;
