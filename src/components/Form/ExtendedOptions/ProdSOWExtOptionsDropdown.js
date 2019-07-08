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
    const {
      input,
      label,
      options,
      hasProduct,
      meta,
      meta: { touched, error }
    } = this.props;
    console.log(input);
    // console.log(hasProduct);
    // console.log(options);
    return (
      <div className="form-group">
        <label className="form-label">{label}</label>
        <div>
          <label className="checkbox-group">
            {" "}
            <div>
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="thumbnail form-group">
                      <img src={quantumDXiBackup} alt="A DXi Backup machine" />
                      <Field
                        name="DXi Products"
                        className="prod-image-checkbox text-center"
                        type="checkbox"
                        component="input"
                      />
                      <div className="caption text-center">
                        <p>DXi Products</p>

                        {this.props.hasDXiProductsCheckbox && (
                          <span>
                            <div>
                              <Field
                                name="prodConfigOptionDxi"
                                className="prod-selector"
                                component="select"
                              >
                                <option>Select a Product Configuration</option>
                                <option value="OptionOneDXi">
                                  Option One DXi
                                </option>
                                <option value="OptionTwoDXi">
                                  Option Two DXi
                                </option>
                                <option value="OptionThreeDXi">
                                  Option Three DXi
                                </option>
                                {/* {this.displayConfiguration()} */}
                              </Field>
                            </div>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="thumbnail form-group">
                      <img
                        src={quantumEncryptionKeyManager}
                        alt="quantumEncryptionKeyManager"
                      />
                      <Field
                        name="Encryption Key Manager"
                        className="prod-image-checkbox text-center"
                        type="checkbox"
                        component="input"
                      />
                      <div className="caption text-center">
                        <p>Encryption Key Manager</p>
                        {this.props.hasEncrypKeyManager && (
                          <span>
                            <div>
                              <Field
                                name="prodConfigOptionEncryp"
                                className="prod-selector"
                                component="select"
                              >
                                <option>Select a Product Configuration</option>
                                <option value="OptionOneEncryp">
                                  OptionOneEncryp
                                </option>
                                <option value="OptionTwoEncryp">
                                  Option Two Encryp
                                </option>
                                <option value="OptionThreeEncryp">
                                  Option Three Encryp
                                </option>
                                {/* {this.displayConfiguration()} */}
                              </Field>
                            </div>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="thumbnail form-group">
                      <img
                        src={quantumLATTUSStorage}
                        alt="Quantum LATTUS Storage"
                      />
                      <Field
                        name="Lattus Storage"
                        className="prod-image-checkbox text-center"
                        type="checkbox"
                        component="input"
                      />
                      <div className="caption text-center">
                        <p>Quantum LATTUS Storage</p>
                        {this.props.hasLattusStorage && (
                          <span>
                            <div>
                              <Field
                                name="prodConfigOptionLattus"
                                className="prod-selector"
                                component="select"
                              >
                                <option>Select a Product Configuration</option>
                                <option value="OptionOneLattus">
                                  Option One LATTUS
                                </option>
                                <option value="OptionTwoLattus">
                                  Option Two LATTUS
                                </option>
                                <option value="OptionThreeLattus">
                                  Option Three LATTUS
                                </option>
                                {/* {this.displayConfiguration()} */}
                              </Field>
                            </div>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="thumbnail form-group">
                      <img src={quantumScalari3LTO} alt="quantumScalari3LTO" />
                      <Field
                        name="Scalari 3LTO"
                        className="prod-image-checkbox text-center"
                        type="checkbox"
                        component="input"
                      />
                      <div className="caption text-center">
                        <p>Quantum Scalari 3LTO</p>
                        {this.props.hasScalari3LTO && (
                          <span>
                            <div>
                              <Field
                                name="prodConfigOptionScalari3LTO"
                                className="prod-selector"
                                component="select"
                              >
                                <option>Select a Product Configuration</option>
                                <option value="OptionOneScalari3LTO">
                                  Option One Scalari3LTO
                                </option>
                                <option value="OptionTwoScalari3LTO">
                                  Option Two Scalari3LTO
                                </option>
                                <option value="OptionThreeScalari3LTO">
                                  Option Three Scalari3LTO
                                </option>
                                {/* {this.displayConfiguration()} */}
                              </Field>
                            </div>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </label>
        </div>

        {/* FieldArray for tape selections */}
        {/* <FieldArray
          name="testArray"
          component={}
        /> */}

        {/* {touched && error && <div style={{ color: "#8c1313" }}>{error}</div>} */}
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
  const hasDXiProductsCheckbox = selector(state, "DXi Products");
  const hasEncrypKeyManager = selector(state, "Encryption Key Manager");
  const hasLattusStorage = selector(state, "Lattus Storage");
  const hasScalari3LTO = selector(state, "Scalari 3LTO");
  return {
    hasProduct,
    hasProductConfigurationOptions,
    hasDXiProductsCheckbox,
    hasEncrypKeyManager,
    hasLattusStorage,
    hasScalari3LTO
  };
})(ProdSOWExtOptionsDropdown);

export default ProdSOWExtOptionsDropdown;
