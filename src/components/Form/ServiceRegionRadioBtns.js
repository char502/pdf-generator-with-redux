import React from "react";

const ServiceRegionRadioBtns = (props) => {
  // console.log(props);

  return (
    <div className="form-group">
      <label htmlFor="Service Region" className="form-label">
        Service Region
      </label>
      <div className="radio-group">
        {props.options.map((option) => {
          return (
            <label key={option}>
              <input
                className="form-radiobuttons"
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

const CustomerInformation = ({ handleChange, title, value, name }) => {
  // console.log(props);
  return (
    <div className="form-group">
      <label className="form-label">Customer Information</label>
      <textarea
        className="form-control"
        rows={10}
        /* style={"resize" ? null : { resize: "none" }} */
        /* name={name} */
        value={value}
        onChange={(event) => handleChange(event.target.value)}
        placeholder={"Please Enter Customer Information Here"}
      />
    </div>
  );
};

export default ServiceRegionRadioBtns;
