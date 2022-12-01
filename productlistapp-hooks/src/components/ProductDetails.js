import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ProductDetails = () => {
    const [product, setProduct] = useState([]);
    const { productId } = useParams();
    // const products: []

    // const params = useParams()
    // const productId = params.productId
    // console.log("useparams Hook", productId)

    useEffect(() => {
        // const productId = params.productId
        if (productId) {
            // axios.get(`https://jsonplaceholder.typicode.com/photos/${productId}`)
            // axios.get (`https://fakestoreapi.com/products/${productId}`)
            // axios.get (`http://localhost:4001/products/${productId}`)
            axios.get (`http://localhost:4001/products/${productId}`)
            .then(response => {
                console.log(response)
                setProduct(response.data)
            })
            .catch(err => {
                console.log(err)
            })
        }
        
    }, [productId])


    return (
        <div>
            {product.title}
            {/* <ul>

            {product.map(productitem => (
                <li key={productitem.id}>{productitem.title}</li>)
            )}
            </ul> */}

            {/* Product Id is: {productId} */}
            {/* <div className="container">
                {product.productId}
                

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                    {product.map(productitem => (
                        

                        <div className="col" key={productitem.id}>
                            {productitem.category}
                           

                            <div className="card shadow-sm" >
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#e6e6e6"></rect><text x="40%" y="50%" fill="#777777" dy=".3em">Product {productitem.id}</text></svg>
                                <div className="card-body">
                                    <h5>{productitem.title}</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">

                                        <button type="button" className="btn btn-sm btn-outline-secondary">Add to Cart</button>
                                       
                                        <small className="text-muted">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div> */}
        </div>
    )
}

export default ProductDetails