import React from "react";
import { Field, reduxForm } from "redux-form";
// import PdfGenFormComponentRedux from "./PdfGenFormComponentRedux";
// import { connect } from "react-redux";
// import ServiceRegionRadioBtns from "./ServiceRegionRadioBtns";
// import CustomerInformation from "./CustomerInformation";
// import Testcomp from "./Testcomp";
// import SowType from "./SOWType";
// import ProductSow from "./SOW_Type/ProductSow";
// import TeraDataSow from "./SOW_Type/TeraDataSOW";
// import CustomSow from "./SOW_Type/CustomSOW";
// import ProdSOWExtOptions from "./ExtendedOptions/ProdSOWExtOptions";
// import PropTypes from "prop-types";

export const PdfGenFormContainerRedux = (props) => {
  const { handleSubmit, onSubmit } = props;
  console.log(props);
  const submitForm = (formValues) => {
    console.log("submitting Form: ", formValues);
  };
  return (
    <div>
      <form className="formContainer" onSubmit={handleSubmit(submitForm)}>
        <div className="form-group">
          <div>
            <label className="form-label">Service Region</label>
            <div>
              <Field
                className="form-radiobuttons"
                name="Service Region"
                component="input"
                type="radio"
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <div>
            <label className="form-label">Customer Information</label>
            <div>
              <Field
                className="form-control"
                name="customerInformation"
                component="textarea"
                rows={10}
                style={"resize" ? null : { resize: "none" }}
                placeholder={"Enter Customer Information Here"}
              />
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const formConfiguration = {
  form: "my-very-own-form"
};

export default reduxForm(formConfiguration)(PdfGenFormContainerRedux);
