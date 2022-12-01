import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'

const ProductList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:4001/products`)
      .then(res => {
        // console.log(res)
        setProducts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <section>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 mt-3">
          {products?.map(productitem => (
            <div className="col" key={productitem.id}>
              <div className="card shadow-sm" >
                <Link to="/">
                  <img src={productitem.imgUrl} width="100%" alt="" />
                  <div className="card-body">
                    <h5>{productitem.producttitle}</h5>
                    <p>Price: <strong>₹{productitem.price}</strong><br />
                      <small>{productitem.category}</small>
                    </p>
                    <p></p>
                  </div>
                </Link>
                <div className="d-flex justify-content-between align-items-center p-2">
                  <button type="button" className="btn btn-sm btn-outline-primary">Add to Cart</button>
                  <small className="text-muted">
                    <Link to='/'>
                      more...
                    </Link>
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductList