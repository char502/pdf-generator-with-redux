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

export default ServiceRegionRadioBtns;
