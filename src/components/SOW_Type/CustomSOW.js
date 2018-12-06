import React from "react";

class CustomSow extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="Custom Professional Services SOW">
          Custom Professional Services SOW
          <input
            name={this.props.name}
            type="checkbox"
            checked={this.props.customSow}
            onChange={this.props.handleCheckedChangeCustomSow}
          />
        </label>
      </div>
    );
  }
}

export default CustomSow;
