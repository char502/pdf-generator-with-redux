const required = (inputs, props) => {
  console.log(inputs);
  console.log(props);
  // const errors = {};

  if (!inputs) {
    return "This field is required";
  }

  // if (!props.serviceRegion) {
  //   errors.serviceRegion = "please select a region";
  // }

  // if (!props.customerInformation) {
  //   errors.customerInformation = "please enter some customer information";
  // }

  // if (!inputs.serviceRegion) {
  //   errors.serviceRegion = "You must select a Service Region";
  // }

  // if (!formValues.customerInformation) {
  //   error.customerInformation = "You must enter some Customer Information";
  // }

  // console.log(errors);
  // return errors;
};

export default required;

// required();

// export const validate = inputs => {
//     const errors = {};
//     if (!inputs.username) {
//         errors.username = 'Enter your Username';
//     } else if (inputs.username !== 'rajat') {
//         errors.username = 'Username is incorrect';
//     }
//     if (!inputs.password) {
//         errors.password = 'Enter your Password';
//     }
//     return errors;
// };
