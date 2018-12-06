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
        productFamily: ""
      }
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleTextArea = this.handleTextArea.bind(this);
    // this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleSOWTypeCheckbox = this.handleSOWTypeCheckbox.bind(this);
    this.renderProdFamily = this.renderProdFamily.bind(this);
    this.getProductFamilies = this.getProductFamilies.bind(this);
    this.addProductFamily = this.addProductFamily.bind(this);
  }

  componentDidMount = () => {
    this.getProductFamilies();
  };

  getProductFamilies = () => {
    fetch("http://localhost:4000/sows")
      .then(response => response.json())
      .then(response => this.setState({ product_families: response.data }))
      .catch(err => console.error(err));
  };

  addProductFamily = () => {
    const { productFamilyNew } = this.state;
    fetch(
      `http://localhost:4000/sows/add?name=${productFamilyNew.productFamily}`
    )
      .then(this.getProductFamilies)
      .catch(err => console.error(err));
  };

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

  renderProdFamily = ({ idprod_family, product_family }) => (
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
        <div>{product_families.map(this.renderProdFamily)}</div>
        <div>
          <input
            value={productFamilyNew.productFamily}
            placeholder={"Add new Product Family"}
            onChange={e =>
              this.setState({
                productFamilyNew: {
                  ...productFamilyNew,
                  productFamily: e.target.value
                }
              })
            }
          />
          <button onClick={this.addProduct}>Add Product </button>
        </div>
      </div>
    );
  }
}

export default PdfGenFormContainer;
