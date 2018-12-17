import React from "react";
import PropTypes from "prop-types";

const CustomerInformation = (
  handleChange,
  title,
  value,
  name,
  placeholder,
  resize,
  rows
) => {
  // console.log(props);
  return (
    <div className="form-group">
      <label className="form-label">{title}</label>
      <textarea
        className="form-control"
        rows={rows}
        style={resize ? null : { resize: "none" }}
        name={name}
        value={value}
        onChange={(event) => handleChange(event.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

// CustomerInformation.defaultProps = {
//   handleChange: (event) => console.info(`New value : ${event.target.value}`),
//   title: null,
//   value: null,
// };

// CustomerInformation.propTypes = {
//   rows: React.PropTypes.number.isRequired,
//   name: React.PropTypes.string.isRequired
// };

export default CustomerInformation;
