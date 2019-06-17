import React from "react";
import { connect } from "react-redux";
import { Field, formValueSelector, reduxForm } from "redux-form";

// const renderField = ({ input, label, type, meta: { touched, error } }) => (
//   <div>
//     <label>{label}</label>
//     <div>
//       <input {...input} type={type} placeholder={label} />
//       {touched && error && <span>{error}</span>}
//     </div>
//   </div>
// );

const renderCustomServOption = (service, index, fields) => (
  <li key={index}>
    Customised Service {index + 1}:{" "}
    <Field
      name={`${service}.firstName`}
      type="text"
      component="input"
      style={{ width: "400px" }}
      label="First Name"
    />
    <button
      type="button"
      className="btn btn-danger"
      size="sm"
      title="Remove Service"
      onClick={() => fields.remove(index)}
    >
      <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
      remove
    </button>
  </li>
);

let CustomProfExtOptions = (props) => {
  const {
    placeholder,
    input,
    fields,
    meta: { error }
  } = props;
  console.log(fields);
  return (
    <div>
      <div className="form-group">
        <label className="checkbox-group">
          Where the work will be performed:{" "}
          <input
            {...input}
            className="form-checkbox"
            style={{ width: "400px" }}
            placeholder={placeholder}
          />
        </label>
      </div>

      <div className="form-group">
        <label className="form-label">
          Detail the work to be performed (up to 10 requirements)
        </label>
        <div>
          <label className="checkbox-group">
            <Field
              name="customTwoCheckbox"
              className="form-checkbox"
              type="checkbox"
              component="input"
            />
            Custom Professional Services
            {props.hasProfServ && (
              <div>
                <ul>
                  <div>
                    <label className="custom-Prof-Serv-group">
                      Customised Service Title:{" "}
                      <Field
                        name="CustomPSTitle"
                        className="custom-Prof-Serv-group"
                        component="input"
                        type="input"
                        style={{ width: "400px" }}
                        placeholder="Custom Professional Service Title"
                      />
                    </label>
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary text-center}"
                    onClick={() => fields.push({})}
                  >
                    Add Service
                  </button>

                  {fields.map(renderCustomServOption)}

                  {error && <li className="error">{error}</li>}
                </ul>

                {/* <div>
                  <Field
                    name="custProfServiceOne"
                    className="form-checkbox"
                    type="input"
                    component="input"
                    placeholder="Box One"
                  />
                </div>
                <div>
                  <Field
                    name="custProfServiceTwo"
                    className="form-checkbox"
                    type="input"
                    component="input"
                    placeholder="Box Two"
                  />
                </div>
                <div>
                  <Field
                    name="custProfServiceThree"
                    className="form-checkbox"
                    type="input"
                    component="input"
                    placeholder="Box Three"
                  />
                </div>
                <div>
                  <Field
                    name="custProfServiceFour"
                    className="form-checkbox"
                    type="input"
                    component="input"
                    placeholder="Box Four"
                  />
                </div> */}
                {/* <FieldArray name="serviceItem" component={input} /> */}
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
