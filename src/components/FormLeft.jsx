import React from "react";

function FormLeft() {
  return (
    <>
      <div className="d-flex mt-2">
        <img className="d-flex border border-dark" src="https://cf.shopee.co.id/file/4ea8db682dee4cf9a167b78eabc39c0b" alt="foto" height="150" width="150" />
        <div className="mt-5 ms-2">
          <h5>Habibi</h5>
          <p>
            <i className="fa fa-edit me-1"></i>Edit Profile
          </p>
        </div>
      </div>
      <div className="d-flex">
        <button className="btn btn-outline-success mt-3 ms-3 ">
          <i className="fa fa-user"></i>
        </button>
        <h5 className="mt-3 ms-2">Profile</h5>
      </div>
      <div className="d-flex">
        <button className="btn btn-outline-success mt-3 ms-3 ">
          <i className="fa fa-book"></i>
        </button>
        <h5 className="mt-3 ms-2">My Order</h5>
      </div>
      <div className="d-flex">
        <button className="btn btn-outline-success mt-3 ms-3 ">
          <i className="fa fa-cart-plus"></i>
        </button>
        <h5 className="mt-3 ms-2">Manage Product</h5>
      </div>
      <div className="d-flex">
        <button className="btn btn-outline-danger mt-3 ms-3 ">
          <i className="fa fa-trash"></i>
        </button>
        <h5 className="mt-3 ms-2 text-danger">Delete Account</h5>
      </div>
    </>
  );
}

export default FormLeft;
