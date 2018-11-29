import React from "react";
import ServiceRegion from "./ServiceRegion";
import CustomerInformation from "./CustomerInformation";
import SowType from "./SOWType";

class PdfGenForm extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <form className="PDFGenForm">
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
        </form>
      </div>
    );
  }
}

export default PdfGenForm;
