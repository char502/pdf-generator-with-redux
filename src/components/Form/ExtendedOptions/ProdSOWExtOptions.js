import React from "react";
import { connect } from "react-redux";

import { change, Field, formValueSelector, reduxForm } from "redux-form";

class ProdSOWExtOptions extends React.Component {
  constructor(props) {
    super(props);
  }
  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (this.props.product !== prevProps.product) {
  //     // this.props.dispatch(change("form", "productConfigurationOptions", ""));
  //     alert("option changed to: ", this.props.productFamily);
  //   }
  // }

  componentWillUpdate(nextProps) {
    if (
      this.props.hasProduct !== "Select a Product Family" /*nextProps.product */
    ) {
      // this.props.dispatch(change("form", "productConfigurationOptions", ""));
      alert("option changed to: ", this.props.productFamily);

      // console.log("option changed to: ", nextProps);
      console.log("option was: ", this.props.hasProduct);
      console.log("option now is: ", nextProps.hasProduct);
      console.log(
        "prod config options: ",
        this.props.productConfigurationOptions
      );
    }
  }

  render() {
    console.log(this.props);

    return (
      <div className="form-group">
        <label className="form-label">{this.props.label}</label>
        <div>
          <label className="checkbox-group">
            {" "}
            Product Selection:{" "}
            <Field name="productFamily" component="select">
              <option>Select a Product Family</option>
              <option value="DXiProducts">DXi Products</option>
              <option value="EncryptionKeyManagerProducts">
                Encryption Key Manager Products
              </option>
              <option value="LATTUS">LATTUS</option>
              <option value="OtherProductsBrocade">
                Other Products (Brocade)
              </option>
              <option value="QXSDiskSystems">
                QXS Disk Systems, StorNext Q-Series Disk and StorNext
                QX/QXS-Series Disk
              </option>
              <option value="ScalarProducts">Scalar Products</option>
              <option value="StorNextAELArchives">StorNext AEL Archives</option>
              <option value="StorNextAppliances">
                StorNext Appliances, Xcellis and Artico (AEL and Disk in
                seperate sections)
              </option>
              <option value="StorNextProSolutionInstallation">
                StorNext ProSolution Installation
              </option>
              <option value="StorNextSoftwareAndServices">
                StorNext Software and Professional Services
              </option>
              <option value="SuperLoader3">SuperLoader 3</option>
            </Field>
            {this.props.productFamily && (
              <Field name="productConfigurationOptions" component="select">
                <option>Select a Configuration Option</option>
                <option value="DXiProducts">DXi Products</option>
                <option value="EncryptionKeyManagerProducts">
                  Encryption Key Manager Products
                </option>
                <option value="LATTUS">LATTUS</option>
                <option value="OtherProductsBrocade">
                  Other Products (Brocade)
                </option>
                <option value="QXSDiskSystems">
                  QXS Disk Systems, StorNext Q-Series Disk and StorNext
                  QX/QXS-Series Disk
                </option>
                <option value="ScalarProducts">Scalar Products</option>
                <option value="StorNextAELArchives">
                  StorNext AEL Archives
                </option>
                <option value="StorNextAppliances">
                  StorNext Appliances, Xcellis and Artico (AEL and Disk in
                  seperate sections)
                </option>
                <option value="StorNextProSolutionInstallation">
                  StorNext ProSolution Installation
                </option>
                <option value="StorNextSoftwareAndServices">
                  StorNext Software and Professional Services
                </option>
                <option value="SuperLoader3">SuperLoader 3</option>
              </Field>
            )}
          </label>
        </div>

        {/* FieldArray for tape selections */}
        {/* <FieldArray
          name="testArray"
          component={}
        /> */}
      </div>
    );
  }
}

ProdSOWExtOptions = reduxForm({
  form: "StatementOfWorkApplication"
})(ProdSOWExtOptions);

const selector = formValueSelector("StatementOfWorkApplication");

ProdSOWExtOptions = connect((state) => {
  const hasProduct = selector(state, "productFamily");
  const hasProductConfigurationOptions = selector(
    state,
    "productConfigurationOptions"
  );
  return {
    hasProduct,
    hasProductConfigurationOptions
  };
})(ProdSOWExtOptions);

export default ProdSOWExtOptions;
