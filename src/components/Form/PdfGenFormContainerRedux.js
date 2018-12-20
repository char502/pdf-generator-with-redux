import React from "react";
import { reduxForm } from "redux-form";
// import PdfGenFormComponentRedux from "./PdfGenFormComponentRedux";
// import { connect } from "react-redux";
// import ServiceRegionRadioBtns from "./ServiceRegionRadioBtns";
import CustomerInformation from "./CustomerInformation";
// import SowType from "./SOWType";
// import ProductSow from "./SOW_Type/ProductSow";
// import TeraDataSow from "./SOW_Type/TeraDataSOW";
// import CustomSow from "./SOW_Type/CustomSOW";
// import ProdSOWExtOptions from "./ExtendedOptions/ProdSOWExtOptions";
// import PropTypes from "prop-types";

class PdfGenFormContainerRedux extends React.Component {
  // componentDidMount() {
  //   this.props.setUpEditableForm();
  // }

  render() {
    console.log(reduxForm);
    // const {
    //   addChange,
    //   discardChanges,
    //   formView,
    //   formEdit,
    //   hasChanged,
    //   saveChanges
    // } = this.props;

    // console.log(this.props);

    // if (!formEdit || !formView) {
    //   return <span>LOADING</span>;
    // }

    return (
      <div>
        <form className="formContainer" onSubmit={this.handleFormSubmit}>
          {/* <ServiceRegionRadioBtns
            title={"Service Region"}
            setName={"Service Region"}
            controlFunc={this.handleRadioBtns}
            type={"radio"}
            options={this.state.serviceRegion}
            selectedOptions={this.state.areaSelectedOption}
          /> */}
          {/* <ServiceRegionRadioBtns
            title={"Service Region"}
            setName={"Service Region"}
            controlFunc={this.handleRadioBtns}
            type={"radio"}
            options={this.state.serviceRegion}
            selectedOptions={this.state.areaSelectedOption}
          /> */}
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
            /* name={"customerInformation"} */
            /* value={formEdit.customerInformation} */
            /* handleChange={(newValue) =>
            addChange("customerInformation", newValue)
          } */
          />
          {/* placeholder={"Please Enter Customer Information Here"} */}
          {/* <SowType
            title={"SOW Type"}
            setName={"SOW Type"}
            subtitle={"What type of SOW do you want to generate?"}
            type={"checkbox"}
            controlFunc={this.handleSOWTypeCheckbox}
            options={this.state.sowType}
            selectedOptions={this.state.sowTypeSelectedOption}
          /> */}
          <div>
            <input
              type="submit"
              className="btn btn-primary float-right"
              value="Submit"
            />
            {/* onSaveAction={saveChanges} */}
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

const formConfiguration = {
  form: "my-very-own-form"
};

export default reduxForm(formConfiguration)(PdfGenFormContainerRedux);
