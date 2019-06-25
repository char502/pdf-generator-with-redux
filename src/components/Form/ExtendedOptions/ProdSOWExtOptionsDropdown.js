import React from "react";
import { connect } from "react-redux";

import { change, Field, formValueSelector, reduxForm } from "redux-form";

//images
// import QuantumDXiBackup from "/Users/Charlie/Web_Projects/";
import quantumDXiBackup from "../../../images/quantumDXiBackup.jpg";
import quantumEncryptionKeyManager from "../../../images/quantumEncryptionKeyManager.jpg";
import quantumLATTUSStorage from "../../../images/quantumLATTUSStorage.jpg";

import quantumScalari3LTO from "../../../images/quantumScalari3LTO.jpg";

class ProdSOWExtOptionsDropdown extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (this.props.product !== prevProps.product) {
  //     // this.props.dispatch(change("form", "productConfigurationOptions", ""));
  //     alert("option changed to: ", this.props.productFamily);
  //   }
  // }

  // componentWillUpdate(nextProps) {
  //   if (
  //     this.props.hasProduct !== "Select a Product Family" /*nextProps.product */
  //   ) {
  //     this.props.dispatch(change("form", "productConfigurationOptions", ""));
  //     // alert("option changed to: ", this.props.productFamily);

  //     // console.log("option changed to: ", nextProps);
  //     console.log("option was: ", this.props.hasProduct);
  //     console.log("option now is: ", nextProps.hasProduct);
  //     console.log(
  //       "prod config options: ",
  //       this.props.productConfigurationOptions
  //     );
  //   }
  // }

  displayProducts = () => {
    // console.log(this.props.options);
    return this.props.options.map((prod) => (
      // console.log(prod.id, prod.product)
      <option key={prod.id} value={prod.product}>
        {prod.product}
      </option>
    ));
  };

  displayConfiguration = () => {
    console.log("hello");
    if (this.props.hasProduct[this.props.id]) {
      return this.props.options.map((prod) => (
        // console.log(prod.id, prod.product)
        <option key={prod.id} value={prod.productConfig}>
          {prod.productConfig}
        </option>
      ));
    }
  };

  render() {
    const { input, label, options, hasProduct } = this.props;
    console.log(input);
    console.log(hasProduct);
    // console.log(options);
    return (
      <div className="form-group">
        <label className="form-label">{label}</label>
        <div>
          <label className="checkbox-group">
            {" "}
            <div>
              {/* <container>
                <row>
                  <col xs={6} md={4}>
                    <img src={quantumDXiBackup} alt="A DXi Backup machine" />
                  </col>
                  <col xs={6} md={4}>
                    <img src={quantumDXiBackup} alt="A DXi Backup machine" />
                  </col>
                  <col xs={6} md={4}>
                    <img src={quantumDXiBackup} alt="A DXi Backup machine" />
                  </col>
                </row>
              </container> */}
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="thumbnail">
                      <label className="prod-family-label">
                        <img
                          src={quantumDXiBackup}
                          alt="A DXi Backup machine"
                        />
                        <Field
                          name="DXi Products"
                          className="prod-image-checkbox text-center"
                          type="checkbox"
                          component="input"
                        />
                        <div className="caption text-center">
                          <p>DXi Products</p>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="thumbnail">
                      <label className="prod-family-label">
                        <img
                          src={quantumEncryptionKeyManager}
                          alt="quantumEncryptionKeyManager"
                        />
                        <Field
                          name="DXi Products"
                          className="prod-checkbox"
                          type="checkbox"
                          component="input"
                        />
                        <div className="caption text-center">
                          <p>Encryption Key Manager Products</p>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="thumbnail">
                      <label className="prod-family-label">
                        <img
                          src={quantumLATTUSStorage}
                          alt="quantumLATTUSStorage"
                        />
                        <Field
                          name="DXi Products"
                          className="prod-checkbox"
                          type="checkbox"
                          component="input"
                        />
                        <div className="caption text-center">
                          <p>LATTUS</p>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="thumbnail">
                      <label className="prod-family-label">
                        <img
                          src={quantumScalari3LTO}
                          alt="quantumScalari3LTO"
                        />
                        <Field
                          name="DXi Products"
                          className="prod-checkbox"
                          type="checkbox"
                          component="input"
                        />
                        <div className="caption text-center">
                          <p>Quantum Scalar i3LTO</p>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="col-md-4">
                <label className="prod-family-label">
                  <Field
                    name="DXi Products"
                    className="prod-checkbox"
                    type="checkbox"
                    component="input"
                  />
                  <img src={quantumDXiBackup} alt="A DXi Backup machine" />
                  <span className="prod-family prod-family-img"></span>
                  DXi Products{" "}
                </label>
              </div>
              <div className="col-md-4">
                <label className="prod-family-label">
                  <Field
                    name="Encryption Key Manager Products"
                    className="form-checkbox"
                    type="checkbox"
                    component="input"
                  />
                  <img
                    src={quantumEncryptionKeyManager}
                    alt="quantumEncryptionKeyManager"
                  />
                  <span className="prod-family prod-family-img"></span>
                  Encryption Key Manager Products{" "}
                </label>
              </div>
              <div className="col-md-4">
                <label className="prod-family-label">
                  <Field
                    name="LATTUS"
                    className="form-checkbox"
                    type="checkbox"
                    component="input"
                  />
                  <img src={quantumLATTUSStorage} alt="quantumLATTUSStorage" />
                  <span className="prod-family prod-family-img"></span>
                  LATTUS{" "}
                </label>
              </div> */}

              {/* component={({ input, options }) =>
                options.map((option) => (
                  <label key={option.id}>
                    <input
                      className="form-radiobuttons"
                      id={option.id}
                      type="radio"
                      {...input}
                      value={option.value}
                      checked={option.value === input.value}
                    />
                    {option.label}
                  </label>
                ))
              } */}
              {/* Product Selection:{" "}
              <select {...input}>
                onChange=
                {this.displayProducts()}
              </select> */}
            </div>
            {/* {this.props.hasProduct && (
              <div>
                Product Configuration:{" "}
                <Field
                  name="productConfigurationOptions"
                  type="input"
                  component="input"
                  label="test hidden item"
                  placeholder="Should appear when an opt selected"
                />
                <Field name="productConfigurationOptions" component="select">
                  <option>Select a Product Configuration</option>
                  <option value="Red">Red</option>
                  <option value="Green">Green</option>
                  <option value="Blue">Blue</option>
                  {this.displayConfiguration()}
                </Field>
              </div>
            )} */}
            {/* <Field name="productFamily" component="select">
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
            </Field> */}
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

ProdSOWExtOptionsDropdown = reduxForm({
  form: "StatementOfWorkApplication"
})(ProdSOWExtOptionsDropdown);

const selector = formValueSelector("StatementOfWorkApplication");

ProdSOWExtOptionsDropdown = connect((state) => {
  const hasProduct = selector(state, "extCustComponentDropdown");
  const hasProductConfigurationOptions = selector(
    state,
    "productConfigurationOptions"
  );
  return {
    hasProduct,
    hasProductConfigurationOptions
  };
})(ProdSOWExtOptionsDropdown);

export default ProdSOWExtOptionsDropdown;
