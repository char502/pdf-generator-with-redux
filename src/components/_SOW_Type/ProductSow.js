import React from "react";

class ProductSow extends React.Component {
  render() {
    console.log(this.props);
    console.log(this.props.checked);
    // const { name, productSowChecked, handleCheckedChangeProduct } = this.props;
    // const { name } = this.props;
    // const content = this.props.productSowChecked
    // ? "content when button is checked"
    // : "";
    return (
      <div>
        {/* <label className="form-label">
          <h5>Sow Type</h5>
          <h6>What type of SOW do you want to generate?</h6>
        </label> */}
        <br />

        <div className="checked-form-group">
          <input
            /* name={this.props.name}
            id={this.props.id} */
            type="checkbox"
            checked={this.props.productSowChecked}
            onChange={this.props.handleCheckedChangeProduct}
            /* value={this.props.value} */
          />
          {/* <label>Product Sow</label> */}
          {/* {this.props.productSowChecked.toString()} */}
        </div>
      </div>
    );
  }
}

export default ProductSow;
