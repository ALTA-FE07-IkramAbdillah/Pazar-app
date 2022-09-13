import React from "react";

const Cart = (item) => {
  return (
    <div className=" px-4 my-5 bg-light ronded-3" key={item.id}>
      <div className="container py-4">
        <button className="btn-close float-end" aria-label="Close">
          Close
        </button>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <img src={item.photo} alt={item.title} height="250px" width="250px" />
          </div>
          <div className="col-md-4">
            <h3>{item.title}</h3>
            <p className="load fw-bold">${item.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
