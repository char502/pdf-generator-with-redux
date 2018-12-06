import React from "react";

class TeraDataSow extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="Teradata Customer SOW">
          Product Sow
          <input
            name={this.props.name}
            type="checkbox"
            checked={this.props.teraData}
            onChange={this.props.handleCheckedChangeTeraData}
          />
        </label>
      </div>
    );
  }
}

export default TeraDataSow;
