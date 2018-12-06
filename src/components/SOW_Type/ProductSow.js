import React from "react";

class ProductSow extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor={"Sow Type"} className="form-label">
          <h5>Sow Type</h5>
          <h6>What type of SOW do you want to generate?</h6>
        </label>
        <br />

        <div className="checked-form-group">
          <input
            name={this.props.name}
            type="checkbox"
            checked={this.props.productSow}
            onChange={this.props.handleCheckedChangeProduct}
          />
          <label htmlFor="Product Sow">Product Sow</label>
        </div>
      </div>
    );
  }
}

export default ProductSow;
