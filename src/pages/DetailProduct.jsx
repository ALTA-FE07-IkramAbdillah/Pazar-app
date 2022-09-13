import React from "react";
import { useLocation } from "react-router-dom";
import { withRouter } from "../withRouter";

const DetailProduct = () => {
  const location = useLocation();

  return (
    <>
      <div className="col-md-6">
        <img src={location.state.photo} alt={location.state.title} height="400px" width="400px" />
      </div>
      <div className="col-md-6">
        <h4 className="text-uppercase text-black-50">{location.state.category}</h4>
        <h1 className="display-5">{location.state.title}</h1>

        <h3 className="display-6 fw-bold my-4">IDR.{location.state.price}</h3>
        <p className="lead">{location.state.description}</p>
        <button className="btn btn-outline-dark px-3 py-2">Add to Cart</button>
        <button className="btn btn-dark ms-4 px-3 py-2">Go to Cart</button>
      </div>
    </>
  );

  // return (
  //   <div>
  //     <div className="sm:flex">
  //       <div>
  //         <img className="w-auto mt-8 m-auto mt-4 sm:w-9/12 md:mt-10 md:mb-10 md:w-11/12 lg:w-[542px] lg:ml-20 lg:mt-20 lg:mb-32 " src={photo} alt={location.state.name} />
  //       </div>
  //       <div className="w-auto mt-8 ml-3 mb-4 sm:w-9/12 md:mt-10 md:mb-10 lg:mt-20 lg:ml-40 lg:w-[578px]">
  //         <h1 className="text-4xl md:text-2xl md: lg:text-5xl font-semibold text-[#1B345F] mb-3.5">{location.state.name}</h1>
  //         <h4 className="md:text-lg lg:text-2xl font-medium text-[#1B345F] mb-8">Rp. {location.state.price}</h4>
  //         <button className="pl-8 pr-8 bg-[#FEF3EB] text-[#F7731C] md:pl-16 md:pr-16 lg:pl-24 lg:pr-24 pt-3 pb-3 rounded-lg mb-8">Add to cart</button>
  //         <h5 className="md:text-lg lg:text-2xl text-[#1B345F] font-medium mb-3.5">Product Descriptions</h5>
  //         <p className=" md:text-lg lg:text-2xl text-[#1B345F] ">
  //           The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own
  //           look.
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default withRouter(DetailProduct);
