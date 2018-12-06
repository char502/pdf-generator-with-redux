import React from "react";

const ServiceRegionRadioBtns = props => {
  // console.log(props);
  return (
    <div className="form-group">
      <label htmlFor={props.name} className="form-label">
        {props.title}
      </label>
      <div className="radio-group">
        {props.options.map(option => {
          return (
            <label key={option}>
              <input
                className="form-radiobuttons"
                id={props.name}
                name={props.name}
                onChange={props.handleChangeRadio}
                value={option}
                checked={props.radioselectedoption.indexOf(option) > -1}
                type={"radio"}
              />
              {option}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceRegionRadioBtns;
