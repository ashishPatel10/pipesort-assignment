import React, { Component } from "react";

class ProductList extends Component {
  state = {};
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Availability</th>
          </tr>
        </thead>

        <tbody>
          {this.props.products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.category.name}</td>
              <td>{product.price}</td>
              <td>{product.isAvailable ? "available" : "not-available"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default ProductList;
