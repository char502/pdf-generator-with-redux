import React from "react";
// import { Field } from "redux-form";
// import PropTypes from "prop-types";

const CustomerInformation = ({
  placeholder,
  input,
  meta,
  meta: { error, touched }
}) => {
  console.log(meta);
  return (
    <div>
      <div className="form-label" />
      <div>
        <textarea
          className="form-control"
          {...input}
          type="textarea"
          rows={10}
          placeholder={placeholder}
          style={"resize" ? null : { resize: "none" }}
        />
        {touched && error && <div style={{ color: "#8c1313" }}>{error}</div>}
        {/* {error && touched && <div style={{ color: "#8c1313" }}>{error}</div>} */}
      </div>
    </div>
  );
};

// CustomerInformation.defaultProps = {
//   handleChange: (event) => console.info(`New value : ${event.target.value}`),
//   title: "Customer Information",
//   value: null,
//   placeholder: "Please Enter Customer Information"
// };

// CustomerInformation.propTypes = {
//   rows: React.PropTypes.number.isRequired,
//   name: React.PropTypes.string.isRequired
// };

export default CustomerInformation;
