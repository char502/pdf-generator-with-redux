import React from "react";
import { connect } from "react-redux";
import {
  Field,
  reduxForm,
  formValueSelector,
  FieldArray /* SubmissionError */
} from "redux-form";
import ServiceRegionRadioBtns from "./ServiceRegionRadioBtns";
import CustomerInformation from "./CustomerInformation";
import CustomProfExtOptions from "./ExtendedOptions/CustomProfExtOptions";
import TeradataExtOptions from "./ExtendedOptions/TeradataExtOptions";
import ProdSOWExtOptionsDropdown from "./ExtendedOptions/ProdSOWExtOptionsDropdown";
// import PropTypes from "prop-types";

let PdfGenFormContainerRedux = (props) => {
  console.log(props);

  const submitForm = (formValues) => {
    console.log("Submission Info: ", formValues);
    // console.log(formValues.productSOW);
    // console.log(values.serviceRegion);
    // console.log(values.teradataExtCustComponent);
  };

  // const clearForm = () => {
  //   console.log("clearForm ");
  // };
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
      <form className="formContainer" onSubmit={props.handleSubmit(submitForm)}>
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
                  { id: 2, label: "NA & LATAM", value: "NA & LATAM" }
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
                name="customerInformation"
                component={CustomerInformation}
                placeholder={"Enter Customer Information Here"}
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">
            SOW Type
            <h6>What type of SOW do you want to generate?</h6>
          </label>
          {/* SOW Type */}
          <div className="checkbox-group">
            <div>
              <label className="checkbox-group">
                <Field
                  name="productSOW"
                  className="form-checkbox"
                  component="input"
                  type="checkbox"
                />
                Product Sow
                {props.hasProductSowValue && (
                  <div>
                    <Field
                      name="extCustComponentDropdown"
                      type="input"
                      component={ProdSOWExtOptionsDropdown}
                      label="Select a Product Family"
                      placeholder="Extended Text Area"
                    />
                  </div>
                )}
              </label>
            </div>
          </div>

          {/* Teradata */}

          <div className="checkbox-group">
            <div>
              <label className="checkbox-group">
                <Field
                  name="teradata"
                  className="form-checkbox"
                  component="input"
                  type="checkbox"
                />
                Teradata Customer SOW
                {props.hasTeradataExtOptionsValue && (
                  <div>
                    <Field
                      name="teradataExtCustComponent"
                      type="input"
                      component={TeradataExtOptions}
                      label="This is the TeradataExtOptions component"
                      placeholder="Teradata Extended Options"
                    />
                  </div>
                )}
              </label>
            </div>
          </div>

          {/* Custom Options */}

          <div className="checkbox-group">
            <div>
              <label className="checkbox-group">
                <Field
                  name="customExtOptions"
                  className="form-checkbox"
                  component="input"
                  type="checkbox"
                />
                Custom Professional Services SOW
                {props.hasCustomProfExtOptionsValue && (
                  <div>
                    {/* <Field
                      name="custProfServices"
                      type="input"
                      component={CustomProfExtOptions}
                      label="Custom Options Info"
                      placeholder="Location"

                      fields={FieldArray}
                    /> */}
                    <FieldArray
                      name="custProfServices"
                      type="input"
                      component={CustomProfExtOptions}
                      label="Custom Options Info"
                      placeholder="Enter Location"
                    />
                  </div>
                )}
              </label>
            </div>
          </div>
        </div>

        <div>
          <button className="btn btn-primary float-right" type="submit">
            Submit
          </button>
          <button
            className="btn btn-primary float-left"
            type="submit"
            onClick={props.reset}
          >
            Clear Form
          </button>
        </div>
      </form>
    </div>
  );
};

PdfGenFormContainerRedux = reduxForm({
  form: "StatementOfWorkApplication"
})(PdfGenFormContainerRedux);

const selector = formValueSelector("StatementOfWorkApplication");
PdfGenFormContainerRedux = connect((state) => {
  const hasProductSowValue = selector(state, "productSOW");
  const hasTeradataExtOptionsValue = selector(state, "teradata");
  const hasCustomProfExtOptionsValue = selector(state, "customExtOptions");
  return {
    hasProductSowValue,
    hasTeradataExtOptionsValue,
    hasCustomProfExtOptionsValue
  };
})(PdfGenFormContainerRedux);

export default PdfGenFormContainerRedux;
