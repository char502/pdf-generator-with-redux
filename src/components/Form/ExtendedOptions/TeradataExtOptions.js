import React from "react";

const TeradataExtOptions = ({ label, placeholder, input }) => {
  // console.log(placeholder, input);
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <textarea
        className="form-control"
        {...input}
        /* type="textarea" */
        rows={3}
        placeholder={placeholder}
        style={"resize" ? null : { resize: "none" }}
      />
    </div>
  );
};

export default TeradataExtOptions;
