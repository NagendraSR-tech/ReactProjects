import React, { Component } from 'react'
import JSON from './db.json'
import ProductListing from './ProductListing'
import './productlist.css';

class Products extends Component {
  constructor() {
    super()
    this.state = {
      title: 'Products page',
      products: JSON
    }
  }

  render() {
    console.log(this.state.products)
    return (
      <div>
        <h2>{this.state.title}</h2>
        <ProductListing prodList={this.state.products} />
      </div>
    )
  }
}

export default Products