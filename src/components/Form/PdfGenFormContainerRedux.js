import React from "react";
import { Field, reduxForm, SubmissionError } from "redux-form";
// import PdfGenFormComponentRedux from "./PdfGenFormComponentRedux";
// import { connect } from "react-redux";
import ServiceRegionRadioBtns from "./ServiceRegionRadioBtns";
// import CustomerInformation from "./CustomerInformation";
// import Testcomp from "./Testcomp";
// import SowType from "./SOWType";
// import ProductSow from "./SOW_Type/ProductSow";
// import TeraDataSow from "./SOW_Type/TeraDataSOW";
// import CustomSow from "./SOW_Type/CustomSOW";
// import ProdSOWExtOptions from "./ExtendedOptions/ProdSOWExtOptions";
// import PropTypes from "prop-types";

export const PdfGenFormContainerRedux = ({
  handleSubmit,
  error,
  touched,
  dirty
}) => {
  // const { meta: { error, touched, dirty } } = this.props;

  //  const { meta: { handleSubmit, error, touched, dirty } } = props;
  //  console.log(props);

  const submitForm = (values) => {
    console.log("Submission Info: ", values);
  };
  // const submitForm = ({ values, serviceRegion, customerInformation = "" }) => {
  //   let error = {};
  //   let isError = false;
  //   // if (serviceRegion === false) {
  //   //   throw new Submission
  //   // }

  //   if (customerInformation.trim() === "") {
  //     error.customerInformation = "Required";
  //     isError = true;
  //   }

  //   if (isError) {
  //     throw new SubmissionError(error);
  //   } else {
  //     console.log("submission valid");
  //   }
  //   console.log(error);
  //   console.log("submitting Form: ", values);
  // };

  return (
    <div>
      <form className="formContainer" onSubmit={handleSubmit(submitForm)}>
        <div>
          <div className="form-group">
            <div>
              <label className="form-label">Service Region</label>
              <ServiceRegionRadioBtns
                name="serviceRegion"
                component="input"
                options={[
                  { id: 0, label: "EMEA", value: "EMEA" },
                  { id: 1, label: "APAC", value: "APAC" },
                  { id: 2, label: "NA & LATAM", value: "NA & LATAM" },
                  { id: 3, label: "Test", value: "Test" }
                ]}
              />
              {/* <span className="error">{error}</span> */}
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
                rows={
                  10 // if want to get the value of this field, you reference it by name
                }
                style={"resize" ? null : { resize: "none" }}
                placeholder={"Enter Customer Information Here"}
              />
              <span className="error">{error}</span>
            </div>
          </div>
        </div>
        <div>
          <button className="btn btn-primary float-right" type="submit">
            Submit
          </button>
          <button className="btn btn-primary float-left" type="submit">
            Clear Form
          </button>
        </div>
      </form>
    </div>
  );
};

const formConfiguration = {
  form: "Statement of Work Application"
};

export default reduxForm(formConfiguration)(PdfGenFormContainerRedux);
