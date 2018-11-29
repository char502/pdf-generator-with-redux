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
      customerInformation: "",
      sowType: [
        "ProductSow",
        "Teradata Customer SOW",
        "Custom Professional Services SOW"
      ],
      sowSelectedOption: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleTextArea = this.handleTextArea.bind(this);
    // this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleSOWTypeCheckbox = this.handleSOWTypeCheckbox.bind(this);
  }

  handleFormSubmit() {
    console.log("handleFormSubmit Clicked");
  }
  handleClearForm() {
    console.log("handleClearForm Clicked");
  }

  handleTextArea() {
    console.log("handleTextArea Clicked");
  }
  // handleCheckBox(e) {
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

  render() {
    console.log(this.props);
    return (
      <div>
        <form className="formContainer" onSubmit={this.handleFormSubmit}>
          <ServiceRegionRadioBtns
            title={"Service Region"}
            name={"Service Region"}
            /* areaoptions={this.state.serviceRegion}
            selectedOption={this.state.areaSelectedOption}
            handleChangeArea={this.handleCheckBox} */
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

        <hr />
        <hr />

        {/* <form className="PDFGenForm">
          <fieldset className="fieldSet">
            <legend className="legend">Service Region</legend>
            <ServiceRegion />
          </fieldset>
          <fieldset className="fieldSet">
            <legend className="legend">Customer Information</legend>
            <CustomerInformation />
          </fieldset>
          <fieldset className="fieldSet">
            <legend className="legend">SOW Type</legend>
            <SowType />
          </fieldset>
        </form> */}
      </div>
    );
  }
}

export default PdfGenFormContainer;
