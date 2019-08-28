import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { storeProducts } from "../data/data";
import { ProductConsumer } from "../data/context";

export default class ProductList extends Component {
  state = {
    products: [],
    store: storeProducts
  };

  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />

            <div className="row">
              <ProductConsumer>
                {hello => {
                  return <h1>{hello}</h1>;
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
      // <Product />
    );
  }
}
