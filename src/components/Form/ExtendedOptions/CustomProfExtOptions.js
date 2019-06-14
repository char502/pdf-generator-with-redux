import React from "react";
import { connect } from "react-redux";
import { Field, formValueSelector, reduxForm } from "redux-form";

let CustomProfExtOptions = (props) => {
  const { formValues, formId, hasProfServ, placeholder, input } = props;
  console.log(formValues, formId, hasProfServ, placeholder, input);
  return (
    <div>
      <div className="form-group">
        <label className="form-label">
          <h6>Where the work will be performed:</h6>
          <input
            className="form-control"
            style={{ width: "500px" }}
            placeholder={placeholder}
          />
        </label>
      </div>

      <div className="form-group">
        <label className="form-label">
          <h6>Select the work to be performed</h6>
        </label>
        <div>
          <label className="checkbox-group">
            <Field
              name="customTwoCheckbox"
              className="form-checkbox"
              type="checkbox"
              component="input"
            />
            Customised Professional Services
            {props.hasProfServ && (
              <div>
                <Field
                  name="custProfServiceTwo"
                  type="input"
                  component="input"
                  /* component={ExtOptions} */
                  /* label="Custom Options Info"
                  placeholder="Location" */
                />
              </div>
            )}
          </label>
        </div>
      </div>

      {/* <FieldArray
        name="testArray"
        component={}
      /> */}
    </div>
  );
};

// export default reduxForm({
//   form: 'CustomProfExtOptions'
// })(CustomProfExtOptions);

// CustomProfExtOptions = reduxForm({
//   form: "StatementOfWorkApplication"
// })(CustomProfExtOptions);

export default CustomProfExtOptions;

// CustomProfExtOptions = reduxForm({
//   form: form,
//   destroyOnUnmount: false
// })(CustomProfExtOptions);

// CustomProfExtOptions = reduxForm({
//   form: "StatementOfWorkApplication"
// })(CustomProfExtOptions);

// const selector = formValueSelector(props.form);
// console.log(selector);

// const selector = formValueSelector("StatementOfWorkApplication");

// const mapStateToProps = (reducers) => {
//   const hasProfServ = selector(reducers, "custProfServiceTwo");
//   return { hasProfServ };
// };

// CustomProfExtOptions = connect((state) => {
//   const hasProfServ = selector(state, "custProfServiceTwo");
//   return {
//     hasProfServ
//   };
// })(CustomProfExtOptions);

// export default CustomProfExtOptions;
// export default connect(mapStateToProps)(CustomProfExtOptions);
