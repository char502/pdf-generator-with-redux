import React from "react";

const ProdSOWExtOptions = (props) => {
  return (
    <div>
      <div className="form-label" />
      <div>
        <input
          className="form-control"
          {...props.input}
          type="checkbox"
          checked={props.input.value}
          label={props.label}
        />
      </div>
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
