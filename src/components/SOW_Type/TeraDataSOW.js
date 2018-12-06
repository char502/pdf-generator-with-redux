import React from "react";

class TeraDataSow extends React.Component {
  render() {
    return (
      <div>
        <div className="checked-form-group">
          <input
            name={this.props.name}
            type="checkbox"
            checked={this.props.teraData}
            onChange={this.props.handleCheckedChangeTeraData}
          />
          <label htmlFor="Teradata Customer SOW">Teradata Customer SOW</label>
        </div>
      </div>
    );
  }
}

export default TeraDataSow;
