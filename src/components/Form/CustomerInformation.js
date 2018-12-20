import React from "react";
import { Field } from "redux-form";
// import PropTypes from "prop-types";

const CustomerInformation = ({ handleSubmit, onSubmit }) => {
  // console.log(props);
  return (
    <div className="form-group">
      <label className="form-label">Customer Information</label>
      <Field
        className="form-control"
        rows={10}
        name="firstName"
        component="input"
        /* style={"resize" ? null : { resize: "none" }} */
        /* name={name} */
        /* value={value} */
        /* onChange={(event) => handleChange(event.target.value)} */
        /* placeholder={"Please Enter Customer Information Here"} */
      />
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
