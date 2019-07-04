import React from "react";
import { connect } from "react-redux";
import {
  Field,
  reduxForm,
  formValueSelector,
  FieldArray,
  SubmissionError
} from "redux-form";
import ServiceRegionRadioBtns from "./ServiceRegionRadioBtns";
import CustomerInformation from "./CustomerInformation";
import CustomProfExtOptions from "./ExtendedOptions/CustomProfExtOptions";
import TeradataExtOptions from "./ExtendedOptions/TeradataExtOptions";
import ProdSOWExtOptionsDropdown from "./ExtendedOptions/ProdSOWExtOptionsDropdown";
import required from "../../validation/index.js";
// import serverCommsReducer from '../../redux/actions/serverCommAction'
// import submitToServer from './server'
// import PropTypes from "prop-types";

// async function submitToServer(formValues) {
//   try {
//     let response = await fetch("http://localhost:3030/sows", {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json"
//       },
//       body: JSON.stringify(formValues)
//     });
//     let responseJson = await response.json();
//     return responseJson;
//   } catch (error) {
//     console.error(error);
//   }
// }

// const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
//   <div>
//     <label>{label}</label>
//     <div>
//       <input {...input} placeholder={label} type={type}/>
//       {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
//     </div>
//   </div>
// )

class PdfGenFormContainerRedux extends React.Component {
  submitForm = (
    formValues,
    { serviceRegion = "", customerInformation = "" }
  ) => {
    console.log("Submission Info: ", formValues);
    // console.log(this.submitForm);

    let error = {};
    let isError = false;

    if (serviceRegion === "") {
      error.serviceRegion = "Required";
      isError = true;
    }

    if (customerInformation === "") {
      error.customerInformation = "Required";
      isError = true;
    }

    if (isError) {
      throw new SubmissionError(error);
    } else {
      //submit form to server
      console.log("Form Submitted to server");
    }

    // console.log(formValues.productSOW);
    // console.log(values.serviceRegion);
    // console.log(values.teradataExtCustComponent);
    // submitToServer(formValues).then((formValues) => console.log(formValues));
    // need a reset in here as well

    // if (this.props.submitFailed) {
    //   console.log("Form fields must not be blank");
    // }

    // this.props.SubmissionError;
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

  render() {
    console.log(this.props);
    return (
      <div>
        <form
          className="formContainer"
          onSubmit={this.props.handleSubmit(this.submitForm)}
        >
          <div>
            <div className="form-group">
              <div>
                <label className="form-label">Service Region</label>

                <Field
                  name="serviceRegion"
                  label="Service Region"
                  component={ServiceRegionRadioBtns}
                  options={[
                    { label: "EMEA", value: "emea" },
                    { label: "APAC", value: "apac" },
                    { label: "NA & LATAM", value: "naAndLatam" }
                  ]}
                  /* validate={required} */

                  /* options={{
                    emea: "EMEA",
                    apac: "APAC",
                    naAndLatam: "NA & LATAM"
                  }} */
                />
                {/* {this.props.touched && this.props.error && (
                  <div>{this.props.error}</div>
                )} */}
                {/* {props.meta.error && props.meta.touched && (
                  <span className="error" style={{ color: "#8c1313" }}>
                    {props.meta.error}
                  </span>
                )} */}
                {/* <ServiceRegionRadioBtns
                name="serviceRegion"
                label="Service Region"
                component="input"
                options={[
                  { id: 0, label: "EMEA", value: "EMEA" },
                  { id: 1, label: "APAC", value: "APAC" },
                  { id: 2, label: "NA & LATAM", value: "NA & LATAM" }
                ]}
                validate={validate}
              /> */}
                {/* {props.touched && (props.error && <div>{props.error}</div>)} */}
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
                  /* validate={required} */
                />
                {/* {touched && error && <span>{error}</span>} */}
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
                  {this.props.hasProductSowValue && (
                    <div>
                      <Field
                        name="prodSowCheckboxes"
                        className="form-checkbox"
                        type="checkbox"
                        component={ProdSOWExtOptionsDropdown}
                        label="Select a Product Family"
                      />
                      {/* <Field
                      name="extCustComponentDropdown"
                      type="input"
                      component={ProdSOWExtOptionsDropdown}
                      label="Select a Product Family"
                      placeholder="Extended Text Area"
                      options={[
                        {
                          id: 0,
                          product: "Select a Product Family",
                          productConfig: []
                        },
                        {
                          id: 1,
                          product: "DXi Products",
                          productConfig: [
                            "Select a DXI Config",
                            "Artico Install and Config",
                            "DXi47XX Onsite Install and Config",
                            "DXi8500 Onsite Installation and Config"
                          ]
                        },
                        {
                          id: 2,
                          product: "Encryption Key Manager Products",
                          productConfig: [
                            "Select an EKM Product Config",
                            "Scalar Key MAnager",
                            "Quantum Scalar"
                          ]
                        },
                        {
                          id: 3,
                          product: "LATTUS",
                          productConfig: [
                            "Select a LATTUS Config",
                            "Lattus Hardware Install",
                            "Lattus Hardware Upgrade"
                          ]
                        }
                      ]}
                    /> */}
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
                  {this.props.hasTeradataExtOptionsValue && (
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
                  {this.props.hasCustomProfExtOptionsValue && (
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
            <button
              className="btn btn-primary float-right"
              type="submit"
              /* onClick={props.submit} */
              /* disabled={props.submitting} */
              /* disabled={!props.valid || props.pristine || props.submitting} */
            >
              Submit
            </button>
            <button
              className="btn btn-danger float-left btnSpacing"
              type="submit"
              onClick={this.props.reset}
            >
              Clear Form
            </button>
            <button
              className="btn btn-primary float-left "
              /* type="submit"
              onClick={this.props.reset} */
            >
              Pdf Preview
            </button>
          </div>
        </form>
      </div>
    );
  }
}

PdfGenFormContainerRedux = reduxForm({
  form: "StatementOfWorkApplication",
  destroyOnUnmount: false
  // required
  // validate
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
