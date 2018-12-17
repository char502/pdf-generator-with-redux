import React from "react";
import { connect } from "react-redux";
import {
  getFormView,
  getFormEdit,
  getHasChanged,
  getHasChanged
} from "../redux/selectors";
import { setupForm, saveForm } from "../redux/thunk";
import { addChange } from "../redux/actions/formActions";
import ServiceRegionRadioBtns from "./ServiceRegionRadioBtns";
import CustomerInformation from "./CustomerInformation";
import SowType from "./SOWType";
// import ProductSow from "./SOW_Type/ProductSow";
// import TeraDataSow from "./SOW_Type/TeraDataSOW";
// import CustomSow from "./SOW_Type/CustomSOW";
// import ProdSOWExtOptions from "./ExtendedOptions/ProdSOWExtOptions";
// import PropTypes from "prop-types";

class PdfGenFormContainer extends React.Component {
  componentDidMount() {
    this.props.setUpEditableForm();
  }

  render() {
    const {
      addChange,
      discardChanges,
      formView,
      formEdit,
      hasChanged,
      saveChanges
    } = this.props;

    if (!formEdit || !formView) {
      return <span>LOADING</span>;
    }

    return (
      <div>
        <form className="formContainer" onSubmit={this.handleFormSubmit}>
          <ServiceRegionRadioBtns
            title={"Service Region"}
            setName={"Service Region"}
            controlFunc={this.handleRadioBtns}
            type={"radio"}
            options={this.state.serviceRegion}
            selectedOptions={this.state.areaSelectedOption}
          />
          {/* <CustomerInformation
            title={"Customer Information"}
            rows={10}
            resize={false}
            name={"customerInformation"}
            value={this.state.customerInformation}
            handleChange={this.handleTextArea}
            placeholder={"Enter Customer Information Here"}
          /> */}
          <CustomerInformation
            title={"Customer Information"}
            rows={10}
            resize={false}
            name={"customerInformation"}
            value={formEdit.field}
            handleChange={(newValue) => addChange("field", newValue)}
            placeholder={"Enter Customer Information Here"}
          />
          <SowType
            title={"SOW Type"}
            setName={"SOW Type"}
            subtitle={"What type of SOW do you want to generate?"}
            type={"checkbox"}
            controlFunc={this.handleSOWTypeCheckbox}
            options={this.state.sowType}
            selectedOptions={this.state.sowTypeSelectedOption}
          />
          <div>
            <input
              type="submit"
              className="btn btn-primary float-right"
              value="Submit"
            />
            <button
              className="btn btn-primary float-left"
              onClick={this.handleClearForm}
            >
              Clear Form
            </button>
          </div>
        </form>
        <br />
        <br />
        {/* <div>{product_families.map(this.renderProdFamilies)}</div>
        <div>
          <input
            value={productFamilyNew.productFamily}
            placeholder={"Add New Product Family"}
            onChange={(e) =>
              this.setState({
                productFamilyNew: {
                  ...productFamilyNew,
                  product_family: e.target.value
                }
              })
            }
          />
          <button onClick={this.addProductFamily}>Add Product Family</button>
          <br />
          <br />
        </div> */}
      </div>
    );
  }
}

PdfGenFormContainer.defaultProps = {
  formView: null,
  formEdit: null,
  hasChanged: true
};

const mapStateToProps = (state) => ({
  formView: getFormView(state),
  formEdit: getFormEdit(state),
  hasChanged: getHasChanged(state)
});

const mapDispatchToProps = (dispatch) => ({
  addChange: (fieldName, fieldValue) =>
    dispatch(addChange(fieldName, fieldValue)),
  discardChanges: () => dispatch(setupForm()),
  saveChanges: () => dispatch(saveForm),
  setupEditableForm: () => dispatch(setupForm())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PdfGenFormContainer);
