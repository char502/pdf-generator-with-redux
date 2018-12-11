import React from "react";
import ServiceRegionRadioBtns from "./ServiceRegionRadioBtns";
import CustomerInformation from "./CustomerInformation";
// import ProductSow from "./SOW_Type/ProductSow";
// import TeraDataSow from "./SOW_Type/TeraDataSOW";
// import CustomSow from "./SOW_Type/CustomSOW";
import SowType from "./SOWType";

// const serviceRegionList = [
//   {serviceRegion: 1, region: 'EMEA'},
//   {serviceRegion: 2, region: 'APAC'},
//   {serviceRegion: 3, region: 'LATAM'}
// ];

// const sowType = [
//   {sowType: 1, region: 'ProductSow'},
//   {sowType: 2, region: 'Teradata Customer SOW'},
//   {sowType: 3, region: 'Custom Professional Services SOW'}
// ];

class PdfGenFormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      serviceRegion: ["EMEA", "APAC", "NA & LATAM"],
      areaSelectedOption: [],
      customerInformation: "",
      sowType: [
        "ProductSow",
        "Teradata Customer SOW",
        "Custom Professional Services SOW"
      ],
      sowTypeSelectedOption: [],
      product_families: [],
      productFamilyNew: {
        product_family: ""
      }
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleTextArea = this.handleTextArea.bind(this);
    this.renderProdFamilies = this.renderProdFamilies.bind(this);
    this.getProductFamilies = this.getProductFamilies.bind(this);
    this.addProductFamily = this.addProductFamily.bind(this);
    // this.checkForDups = this.checkForDups.bind(this);
    // SOW Type Methods
    this.handleRadioBtns = this.handleRadioBtns.bind(this);
    this.handleSOWTypeCheckbox = this.handleSOWTypeCheckbox.bind(this);
  }
  // === SOW Type group ===
  componentDidMount = () => {
    this.getProductFamilies();
  };

  getProductFamilies = () => {
    fetch("http://localhost:4000/product_familes")
      .then(response => response.json())
      .then(response => this.setState({ product_families: response.data }))
      .catch(err => console.error(err));
  };

  // checkForDups = () => {
  //   const { productFamilyNew, product_families } = this.state;
  //   console.log(product_families.indexOf(productFamilyNew.product_family));

  //   if (product_families.indexOf(productFamilyNew.product_family) === -1) {
  //     alert("this is a duplicate entry!");
  //   }
  // };

  addProductFamily = () => {
    const { productFamilyNew /* product_families */ } = this.state;
    fetch(
      `http://localhost:4000/product_familes/add?product_family=${
        productFamilyNew.product_family
      }`
    )
      .then(this.getProductFamilies)
      // .then(this.checkForDups())
      .catch(err => console.error(err));
  };
  // === End of SOW Type group ===

  handleFormSubmit() {
    // console.log("handleFormSubmit Clicked");
  }
  handleClearForm(e) {
    // console.log("handleClearForm Clicked");
    e.preventDefault();
    this.setState({
      areaSelectedOption: [],
      customerInformation: "",
      sowTypeSelectedOption: []
    });
  }

  handleTextArea(e) {
    // console.log("handleTextArea Clicked");
    let value = e.target.value;
    this.setState(
      prevState => ({
        customerInformation: value
      }) /*,
      () =>  console.log(this.state.customerInformation) */
    );
  }

  handleRadioBtns(e) {
    this.setState(
      {
        areaSelectedOption: [e.target.value]
      },
      () => console.log("Region", this.state.areaSelectedOption)
    );
  }

  handleSOWTypeCheckbox(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.sowTypeSelectedOption.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.sowTypeSelectedOption.filter(
        item => item !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.sowTypeSelectedOption, newSelection];
    }
    this.setState({ sowTypeSelectedOption: newSelectionArray }, () =>
      console.log("sow Type Selection", this.state.sowTypeSelectedOption)
    );
  }

  renderProdFamilies = ({ idprod_family, product_family }) => (
    <div key={idprod_family}>{product_family}</div>
  );

  render() {
    const { product_families, productFamilyNew } = this.state;

    // console.log(this.props);

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
          <CustomerInformation
            title={"Customer Information"}
            rows={10}
            value={this.state.customerInformation}
            name={"customerInformation"}
            handleChange={this.handleTextArea}
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
              /* type="submit" */
              className="btn btn-primary float-left"
              onClick={this.handleClearForm}
            >
              Clear Form
            </button>
          </div>
        </form>
        <br />
        <br />
        <div>{product_families.map(this.renderProdFamilies)}</div>
        <div>
          <input
            value={productFamilyNew.productFamily}
            placeholder={"Add New Product Family"}
            onChange={e =>
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
        </div>
      </div>
    );
  }
}

export default PdfGenFormContainer;
