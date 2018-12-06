import React from "react";

class ProductSow extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="Product Sow">
          Product Sow
          <input
            name={this.props.name}
            type="checkbox"
            checked={this.props.productSow}
            onChange={this.props.handleCheckedChangeProduct}
          />
        </label>
      </div>
    );
  }
}

export default ProductSow;
