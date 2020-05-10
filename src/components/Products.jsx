import React, { Component } from "react";
import ListGroup from "./ListGroup";
import { productCategories } from "../service/category";
import { products } from "../service/products";
import ProductList from "./ProductList";
import _ from "lodash";
class Products extends Component {
  state = {
    products: [],
    categories: [],
    selectedCategory: "",
    path: "category",
    order: "asc",
    searchQuery: "",
  };
  componentDidMount() {
    const categories = [{ _id: "", name: "All" }, ...productCategories];
    this.setState({ categories: categories, products: products });
  }
  handleCategorySelect = (category) => {
    this.setState({ selectedCategory: category });
  };
  raiseSort = (path) => {
    const path1 = path;
    let order = this.state.order;
    if (this.state.path === path) {
      order = this.state.order === "asc" ? "desc" : "asc";
    } else {
      order = "asc";
    }
    this.setState({ path: path1, order: order });
  };
  handleOnSearch = (e, col) => {
    this.setState({ searchQuery: e.target.value });
  };
  render() {
    const { selectedCategory, products, searchQuery, path, order } = this.state;
    const filtered =
      selectedCategory && selectedCategory._id
        ? products.filter((c) => c.category._id === selectedCategory._id)
        : products;
    const newfiltered = searchQuery
      ? filtered.filter((d) =>
          d["name"].toLowerCase().includes(searchQuery.toLowerCase())
        )
      : filtered;
    const sorted = _.orderBy(newfiltered, [path], [order]);

    return (
      <div className="container" style={{ marginTop: "5%" }}>
        <div className="row">
          <div className="col-md-2">
            <ListGroup
              items={this.state.categories}
              onItemSelect={this.handleCategorySelect}
              selectedItem={this.state.selectedCategory}
            />
          </div>
          <div className="col-md">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <label>search item</label>{" "}
                    <input
                      name="searchQuery"
                      type="text"
                      placeholder="item name"
                      value={this.state.searchQuery}
                      onChange={(e) => this.handleOnSearch(e)}
                    />
                  </div>
                  <div className="col-md-2"></div>
                  <div className="col-md-4">
                    <button
                      className="btn btn-primary"
                      onClick={() => this.raiseSort("price")}
                    >
                      sort by price
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6"></div>
            </div>
            <div className="row">
              <ProductList products={sorted} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
