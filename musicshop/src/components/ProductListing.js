import React from 'react';
import './productlist.css';

const ProductListing = (props) => {

  const renderList = ({ prodList }) => {
    if (prodList) {
      return prodList.map((data) => {
        return (
          <div key={data.id} >
            <img src={data.img} alt={data.name} />
            <h5>{data.name}</h5>
            <p>Price : <span>{data.price}/-</span></p>
            <p>Type : <span>{data.type}</span></p>
            <p>{data.description}</p>
          </div>
        )
      })
    }
  }

  return (
    <div className='product-container'>
      {renderList(props)}
    </div>
  )
}

export default ProductListing