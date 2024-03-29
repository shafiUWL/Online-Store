import React from "react";
import data from "./data";
import '../index.css'

export default function ProductScreen(props) {
  const product = data.products.find((x) => x._id === props.match.params.id); //find is an array function that finds whatever you are looking for in an array.
  if (!product) {
    return <div> Product Not Found </div>;
  }
  return (
    <div>
      <div className="row top">
        <div className="col-2">
          <img className="medium" src={product.image} alt={product.name}></img>
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>Price: ${product.price}</li>
            <li>
              Description:
              <p> {product.description} </p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>price</div>
                  <div className="price">${product.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className="success">InStock</span>
                    ) : (
                      <span className="error">Unavalible</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary block">Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
