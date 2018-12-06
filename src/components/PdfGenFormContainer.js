import React from "react";
import ServiceRegionRadioBtns from "./ServiceRegionRadioBtns";
import CustomerInformation from "./CustomerInformation";
import SowType from "./SOWType";

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
      sowSelectedOption: [],
      product_families: [],
      productFamilyNew: {
        product_family: ""
      }
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleTextArea = this.handleTextArea.bind(this);
    // this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleSOWTypeCheckbox = this.handleSOWTypeCheckbox.bind(this);
    this.renderProdFamilies = this.renderProdFamilies.bind(this);
    this.getProductFamilies = this.getProductFamilies.bind(this);
    this.addProductFamily = this.addProductFamily.bind(this);
    this.checkForDups = this.checkForDups.bind(this);
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
  handleClearForm() {
    // console.log("handleClearForm Clicked");
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

  // this.setState(
  //     prevState => ({
  //       newUser: {
  //         ...prevState.newUser,
  //         about: value
  //       }
  //     }),
  //     () => console.log(this.state.newUser)
  //   );
  //   handleRadioBtns(e) {
  //   const areaCheckSelection = e.target.value;
  //   let newCheckSelectionArray;

  //   if (this.state.areaSelectedOption.indexOf(areaCheckSelection) > -1) {
  //     newCheckSelectionArray = this.state.areaSelectedOption.filter(
  //       s => s !== areaCheckSelection
  //     );
  //   } else {
  //     newCheckSelectionArray = [
  //       ...this.state.areaSelectedOption,
  //       areaCheckSelection
  //     ];
  //   }
  //   this.setState(prevState => ({
  //     areaSelectedOption: {
  //       areaSelectedOption: newCheckSelectionArray
  //     }
  //   }));
  // }

  handleSOWTypeCheckbox(e) {
    const sowTypeCheckSelection = e.target.value;
    let newSOWTypeSelectionArray;

    if (this.state.sowSelectedOption.indexOf(sowTypeCheckSelection) > -1) {
      //If a match between state array and // selected is found
      // assign to this variable:
      newSOWTypeSelectionArray =
        // all those that are not equal to what you picked
        this.state.sowSelectedOption.filter(s => s !== sowTypeCheckSelection);
    } else {
      newSOWTypeSelectionArray = [
        ...this.state.sowSelectedOption,
        sowTypeCheckSelection
      ];
      console.log(newSOWTypeSelectionArray);
      this.setState(prevState => ({
        sowSelectedOption: {
          sowSelectedOption: newSOWTypeSelectionArray
        }
      }));
    }
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
            name={"Service Region"}
            options={this.state.serviceRegion}
            radioselectedoption={this.state.areaSelectedOption}
            handleChangeRadio={this.handleRadioBtns}
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
            name={"SOW Type"}
            subtitle={"What type of SOW do you want to generate?"}
            options={this.state.sowType}
            selectedOption={this.state.sowSelectedOption}
            handleChange={this.handleSOWTypeCheckbox}
          />
        </form>
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
