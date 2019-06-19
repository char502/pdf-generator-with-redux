import React from "react";
import { Field, formValueSelector, reduxForm } from "redux-form";

const ProdSOWExtOptions = ({ label, placeholder, input }) => {
  console.log(placeholder, input);
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <div>
        <label className="checkbox-group">
          <Field
            name="customTwoCheckbox"
            className="form-checkbox"
            type="checkbox"
            component="input"
          />
        </label>
      </div>

      {/* FieldArray for tape selections */}
      {/* <FieldArray
        name="testArray"
        component={}
      /> */}
    </div>
  );
};

export default ProdSOWExtOptions;

// {
/* <div>
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
  </div>
</div> */
// }
