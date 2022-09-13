import React from "react";

const Cart = (product) => {
  return (
    <div className=" px-4 my-5 bg-light ronded-3" key={product.id}>
      <div className="container py-4">
        <button className="btn-close float-end" aria-label="Close">
          Close
        </button>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <img src={product.image} alt={product.title} height="250px" width="250px" />
          </div>
          <div className="col-md-4">
            <h3>{product.title}</h3>
            <p className="load fw-bold">${product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
