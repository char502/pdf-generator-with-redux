import React from "react";
import ProductSow from "./SOW_Type/ProductSow";
import TeraData from "./SOW_Type/TeraDataSOW";
import CustomSow from "./SOW_Type/CustomSOW";

const SOWType = props => {
  // console.log(props);
  return (
    <div className="form-group">
      <label htmlFor={props.name} className="form-label">
        {props.title}
        <h6>{props.subtitle}</h6>
      </label>
      <div className="checkbox-group vertical-align">
        <ProductSow
          name={"Product Sow"}
          type="checkbox"
          checked={props.productSow}
          onChange={props.handleCheckedChangeProduct}
        />
        <TeraDataSow
          name={props.name}
          type="checkbox"
          checked={props.teraData}
          onChange={props.handleCheckedChangeTeraData}
        />
        <CustomSow
          name="Custom Professional Services SOW"
          type="checkbox"
          checked={props.customSow}
          onChange={props.handleCheckedChangeCustomSow}
        />
        {/* {props.options.map(option => {
          return (
            <label key={option}>
              <input
                className="form-checkbox"
                id={props.name}
                name={props.name}
                onChange={props.handleChange}
                value={option}
                checked={props.selectedOption.indexOf(option) > -1}
                type="checkbox"
              />
              {option}
            </label>
          );
        })} */}
      </div>
    </div>
  );
};

export default SOWType;
