import React from "react";

class CustomSow extends React.Component {
  render() {
    return (
      <div>
        <div className="checked-form-group">
          <input
            name={this.props.name}
            type="checkbox"
            checked={this.props.customSow}
            onChange={this.props.handleCheckedChangeCustomSow}
          />
          <label htmlFor="Custom Professional Services SOW">
            Custom Professional Services SOW
          </label>
        </div>
      </div>
    );
  }
}

export default CustomSow;
