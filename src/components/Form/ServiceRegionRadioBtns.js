import React from "react";
import { Field } from "redux-form";
// import PropTypes from "prop-types";

const ServiceRegionRadioBtns = ({
  input,
  disabled,
  className,
  heading,
  required,
  options,
  name,
  meta,
  meta: { touched, error }
}) => (
  console.log(meta),
  (
    <fieldset className="form-label">
      <div className="form-label">
        <div className="radio-group">
          {options.map((option, index) => (
            <label
              key={index}
              className="form-radiobuttons"
              htmlFor={`${name}-${option.value}`}
            >
              <input
                {...input}
                name={name}
                type="radio"
                value={option.value}
                disabled={disabled}
                checked={option.value === input.value}
                className="form-radiobuttons"
                id={`${name}-${option.value}`}
              />
              {option.label}
            </label>
          ))}
          {touched && error && <div style={{ color: "#8c1313" }}>{error}</div>}
          {/* {error && touched && <div style={{ color: "#8c1313" }}>{error}</div>} */}
        </div>
      </div>
    </fieldset>
  )
);
// console.log(props);

//   if (props && props.input && props.options) {
//     const renderServiceRadioButtons = (key, index) => {
//       return (
//         <label
//           className="radio-group"
//           key={`${index}`}
//           htmlFor={`${props.input.name}-${index}`}
//         >
//           <Field
//             id={`${props.input.name}`}
//             component="input"
//             name={props.input.name}
//             type="radio"
//             value={key}
//             className="form-radiobuttons"
//           />
//           {props.options[key]}
//           <div></div>
//         </label>
//       );
//     };
//     return (
//       <div className="radio-group">
//         <div className="form-radiobuttons">{props.label}</div>
//         <div>
//           {props.options &&
//             Object.keys(props.options).map(renderServiceRadioButtons)}
//         </div>
//         {props.meta.error && props.meta.touched && (
//           <div className="error" style={{ color: "#8c1313" }}>
//             {props.meta.error}
//           </div>
//         )}
//       </div>
//     );
//   }
//   return <div></div>;
// };

export default ServiceRegionRadioBtns;

///////////////////////////////////////////////////////////

// const ServiceRegionRadioBtns = (props) => {
//   console.log(props);
//   console.log(props.meta.error);
//   console.log(props.input);
//   console.log(props.input.name);
//   console.log(props.label);

//   if (props && props.input && props.options) {
//   const renderServiceRadioButtons = (key, index) => {
//     return (
//       <label
//         className="radio-group"
//         key={`${index}`}
//         htmlFor={`${props.input.name}-${index}`}
//       >
//         <Field
//           id={`${props.input.name}`}
//           component="input"
//           name={props.input.name}
//           type="radio"
//           value={key}
//           className="form-radiobuttons"
//         />
//         {props.options[key]}
//         <div></div>
//       </label>
//     );
//   };
//   return (
//     <div className="radio-group">
//       <div className="form-radiobuttons">{props.label}</div>
//       <div>
//         {props.options &&
//           Object.keys(props.options).map(renderServiceRadioButtons)}
//       </div>
//       {props.meta.error && props.meta.touched && (
//         <div className="error" style={{ color: "#8c1313" }}>
//           {props.meta.error}
//         </div>
//       )}
//     </div>
//   );
//   }
//   return <div></div>;
// };

// export default ServiceRegionRadioBtns;
////////////////////////////////////////////////////

////////////////////////////////////////////////
// const ServiceRegionRadioBtns = ({
//   name,
//   options
//   // meta,
//   // meta: { touched, error }
// }) => (
//   // console.log(name, input, meta),
//   <div className="form-label">
//     <div className="radio-group">
//       <Field
//         /* name="serviceRegion" */
//         component={({ input, options }) =>
//           options.map((option) => (
//             <label key={option.id}>
//               <input
//                 className="form-radiobuttons"
//                 id={option.id}
//                 type="radio"
//                 {...input}
//                 value={option.value}
//                 checked={option.value === input.value}
//               />
//               {option.label}
//             </label>
//           ))
//         }
//         name={name}
//         options={options}
//       />
//       <div>
//           {meta.error && meta.touched && (
//             <span className="error" style={{ color: "#8c1313" }}>
//               {meta.error}
//             </span>
//           )}
//         </div>
//     </div>
//   </div>
// );

// export default ServiceRegionRadioBtns;

// const ServiceRegionRadioBtns = ({
//   name,
//   options,
//   meta
//   // meta: { error, touched }
// }) => (
//   console.log(name, options, meta),
//   (
//     <div className="form-label">
//       <div className="radio-group">
//         <Field
//           name={name}
//           options={options}
//           component={({ input, options }) =>
//             options.map((option) => (
//               <label key={option.id}>
//                 <input
//                   className="form-radiobuttons"
//                   id={option.id}
//                   type="radio"
//                   {...input}
//                   value={option.value}
//                   checked={option.value === input.value}
//                 />
//                 {option.label}
//               </label>
//             ))
//           }
//           /* name={name}
//           options={options} */
//         />
//         {/* <div>
//           {meta.error && meta.touched && (
//             <span className="error" style={{ color: "#8c1313" }}>
//               {meta.error}
//             </span>
//           )}
//         </div> */}
//       </div>
//     </div>
//   )
// );

///////////////////////////////////////////////////////////////

// return (
//   <div className="form-label">
//     <div className="radio-group">
//       <Field
//         name={name}
//         options={options}
//         component={({ input, options }) =>
//           options.map((option) => (
//             <label key={option.id}>
//               <input
//                 className="form-radiobuttons"
//                 id={option.id}
//                 type="radio"
//                 {...input}
//                 value={option.value}
//                 checked={option.value === input.value}
//               />
//               {option.label}
//             </label>
//           ))
//         }
//       />
//     </div>
//   </div>
// );

// export default ServiceRegionRadioBtns;

/////////////////////////////////////////////////////////

// export default ServiceRegionRadioBtns;

// ServiceRegionRadioBtns.propTypes = {
//   options: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       label: PropTypes.string.isRequired,
//       value: PropTypes.string.isRequired
//     })
//   ),
//   name: PropTypes.string.isRequired
// };
