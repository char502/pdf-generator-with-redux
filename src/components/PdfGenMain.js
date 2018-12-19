import React from "react";
import PdfGenFormContainerRedux from "./PdfGenFormContainerRedux";
// import ServiceRegion from "./ServiceRegion";
// import CustomerInformation from "./CustomerInformation";
// import SowType from "./SOWType";

class PdfGenMain extends React.Component {
  render() {
    return (
      <div>
        {/* <p>This is PDF Gen Main</p> */}
        <PdfGenFormContainerRedux />
      </div>
    );
  }
}

export default PdfGenMain;
