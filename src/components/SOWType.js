import React from "react";
// import ProductSow from "./SOW_Type/ProductSow";
// import TeraData from "./SOW_Type/TeraDataSOW";
// import CustomSow from "./SOW_Type/CustomSOW";

const SOWType = props => {
  // console.log(props);
  return (
    <div className="form-group">
      <label htmlFor={props.name} className="form-label">
        {props.title}
        <h6>{props.subtitle}</h6>
      </label>
      <div className="checkbox-group">
        {props.options.map(option => {
          return (
            <label key={option}>
              <input
                className="form-checkbox"
                name={props.setName}
                onChange={props.controlFunc}
                value={option}
                checked={props.selectedOptions.indexOf(option) > -1}
                type={props.type}
              />
              {option}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default SOWType;
