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
            {...input}
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
                <div>
                  <Field
                    name="custProfServiceOne"
                    className="form-checkbox"
                    type="input"
                    component="input"
                    /* component={ExtOptions} */
                    /* label="Custom Options Info" */
                    placeholder="Box One"
                  />
                </div>
                <div>
                  <Field
                    name="custProfServiceTwo"
                    className="form-checkbox"
                    type="input"
                    component="input"
                    /* component={ExtOptions} */
                    /* label="Custom Options Info" */
                    placeholder="Box Two"
                  />
                </div>
                <div>
                  <Field
                    name="custProfServiceThree"
                    className="form-checkbox"
                    type="input"
                    component="input"
                    /* component={ExtOptions} */
                    /* label="Custom Options Info" */
                    placeholder="Box Three"
                  />
                </div>
                <div>
                  <Field
                    name="custProfServiceFour"
                    className="form-checkbox"
                    type="input"
                    component="input"
                    /* component={ExtOptions} */
                    /* label="Custom Options Info" */
                    placeholder="Box Four"
                  />
                </div>
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

CustomProfExtOptions = reduxForm({
  form: "StatementOfWorkApplication"
})(CustomProfExtOptions);

const selector = formValueSelector("StatementOfWorkApplication");
CustomProfExtOptions = connect((state) => {
  const hasProfServ = selector(state, "customTwoCheckbox");
  return {
    hasProfServ
  };
})(CustomProfExtOptions);

export default CustomProfExtOptions;
