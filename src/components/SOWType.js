import React from "react";

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
        })}
      </div>
    </div>
  );
};

export default SOWType;
