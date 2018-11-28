import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import PdfGenMain from "../components/PdfGenMain";
import RetrievePrevious from "../components/RetrievePrevious";
import ProfessionalServices from "../components/ProfessionalServices";
import NotFoundPage from "../components/NotFoundPage";

const IndexRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={PdfGenMain} exact={true} />
        <Route
          path="/RetrievePrevious"
          component={RetrievePrevious}
          exact={true}
        />
        <Route path="/RetrievePrevious/:id" component={RetrievePrevious} />
        {/* poss need '/:id' at end of /RetrievePrevious path, i.e jump to rprev from pdf main - not sure yet */}
        <Route path="/ProfessionalServices" component={ProfessionalServices} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default IndexRouter;
