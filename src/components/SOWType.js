import React from "react";
// import ProductSow from "./SOW_Type/ProductSow";
// import TeraData from "./SOW_Type/TeraDataSOW";
// import CustomSow from "./SOW_Type/CustomSOW";

class SOWType extends React.Component {
  render() {
    // componentList = {
    //   ProductSow: "component for productSow",
    //   "Teradata Customer SOW": "component for 2nd option", "Custom Professional Services SOW": "component for 3rd option"
    // };
    // console.log(this.props);
    return (
      <div className="form-group">
        <label /*htmlFor={this.props.name} */ className="form-label">
          {this.props.title}
          <h6>{this.props.subtitle}</h6>
        </label>
        <div className="checkbox-group">
          {this.props.options.map(option => {
            return (
              <label key={option}>
                <input
                  className="form-checkbox"
                  name={this.props.setName}
                  onChange={this.props.controlFunc}
                  value={option}
                  checked={this.props.selectedOptions.indexOf(option) > -1}
                  type={this.props.type}
                />
                {option}
              </label>
            );
          })}
          {/* {this.props.options.map((option, index) => {
            return (
              <label key={index}>
                <input
                  className="form-checkbox"
                  name={this.props.setName}
                  onChange={this.props.controlFunc}
                  value={index.option}
                  checked={this.props.selectedOptions.indexOf(option) > -1}
                  checked={this.props.checked[index]}
                  type={this.props.type}
                />
                {index.option}
              </label>
            );
          })} */}
        </div>
      </div>
    );
  }
}

// const SOWType = props => {
//   console.log(props);
//   return (
//     <div className="form-group">
//       <label htmlFor={props.name} className="form-label">
//         {props.title}
//         <h6>{props.subtitle}</h6>
//       </label>
//       <div className="checkbox-group">
//         {props.options.map(option => {
//           return (
//             <label key={option}>
//               <input
//                 className="form-checkbox"
//                 name={props.setName}
//                 onChange={props.controlFunc}
//                 value={option}
//                 checked={props.selectedOptions.indexOf(option) > -1}
//                 type={props.type}
//               />
//               {option}
//             </label>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

export default SOWType;
