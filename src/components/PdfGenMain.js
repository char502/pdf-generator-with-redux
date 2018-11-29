import React from "react";
import PdfGenForm from "./PdfGenForm";
// import ServiceRegion from "./ServiceRegion";
// import CustomerInformation from "./CustomerInformation";
// import SowType from "./SOWType";

class PdfGenMain extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0
    };
  }
  render() {
    return (
      <div>
        <p>This is PDF Gen Main</p>
        <PdfGenForm />
      </div>
    );
  }
}

export default PdfGenMain;
