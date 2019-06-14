import React from "react";
import { Field } from "redux-form";
// import PropTypes from "prop-types";

const ServiceRegionRadioBtns = ({ name, options }) => (
  <div className="form-label">
    <div className="radio-group">
      <Field
        component={({ input, options }) =>
          options.map((option) => (
            <label key={option.id}>
              <input
                className="form-radiobuttons"
                id={option.id}
                type="radio"
                {...input}
                value={option.value}
                checked={option.value === input.value}
              />
              {option.label}
            </label>
          ))
        }
        name={name}
        options={options}
      />
    </div>
  </div>
);

export default ServiceRegionRadioBtns;

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
