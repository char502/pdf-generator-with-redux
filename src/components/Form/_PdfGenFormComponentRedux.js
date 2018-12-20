import React from "react";
import { reduxForm } from "redux-form";
import PdfGenFormComponentRedux from "./_PdfGenFormComponentRedux";

export const PdfGenFormContainerRedux = (props) => {
  return <PdfGenFormComponentRedux />;
};

const formConfiguration = {
  form: "my-very-own-form"
};

export default reduxForm(formConfiguration)(formContainer);
