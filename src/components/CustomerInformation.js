import React from "react";

const CustomerInformation = props => {
  // console.log(props);
  return (
    <div className="form-group">
      <label className="form-label">{props.title}</label>
      <textarea
        className="form-control"
        rows={props.rows}
        style={props.resize ? null : { resize: "none" }}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default CustomerInformation;
